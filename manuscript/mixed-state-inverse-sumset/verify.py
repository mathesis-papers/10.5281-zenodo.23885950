import argparse
from fractions import Fraction
from itertools import product
import json
import math
from pathlib import Path


def reduce_cyclotomic(coefficients):
    reduced = [Fraction(0) for index in range(7)]
    for exponent, coefficient in enumerate(coefficients):
        reduced[exponent % 7] += coefficient
    return tuple(coefficient - reduced[6] for coefficient in reduced[:6])


def multiply_cyclotomic(left, right):
    coefficients = [Fraction(0) for index in range(len(left) + len(right) - 1)]
    for left_exponent, left_coefficient in enumerate(left):
        for right_exponent, right_coefficient in enumerate(right):
            coefficients[left_exponent + right_exponent] += left_coefficient * right_coefficient
    return reduce_cyclotomic(coefficients)


def characteristic(clock, shift):
    if shift != 0:
        return reduce_cyclotomic([0])
    coefficients = [Fraction(0) for index in range(7)]
    coefficients[0] += Fraction(1, 2)
    coefficients[(-clock) % 7] += Fraction(1, 2)
    return reduce_cyclotomic(coefficients)


def entropy_in_log_two(distribution):
    coefficient = Fraction(0)
    for probability in distribution:
        if probability == 0:
            continue
        denominator = probability.denominator
        assert probability.numerator == 1
        assert denominator & (denominator - 1) == 0
        coefficient += probability * (denominator.bit_length() - 1)
    return coefficient


def verify():
    dimension = 7
    scale = 2
    assert (2 * scale ** 2) % dimension == 1
    images = {
        ((scale * first + scale * second) % dimension,
         (-scale * first + scale * second) % dimension)
        for first, second in product(range(dimension), repeat=2)
    }
    assert len(images) == dimension ** 2
    state = [Fraction(1, 2) if index in (0, 1) else Fraction(0) for index in range(dimension)]
    convolution = [Fraction(0) for index in range(dimension)]
    complement = [Fraction(0) for index in range(dimension)]
    for first, second in product(range(dimension), repeat=2):
        weight = state[first] * state[second]
        convolution[(scale * first + scale * second) % dimension] += weight
        complement[(-scale * first + scale * second) % dimension] += weight
    assert convolution == [Fraction(1, 4), 0, Fraction(1, 2), 0, Fraction(1, 4), 0, 0]
    assert complement == [Fraction(1, 2), 0, Fraction(1, 4), 0, 0, Fraction(1, 4), 0]
    assert entropy_in_log_two(state) == 1
    assert entropy_in_log_two(convolution) == Fraction(3, 2)
    assert entropy_in_log_two(complement) == Fraction(3, 2)
    assert sum(probability ** 2 for probability in state) == Fraction(1, 2)
    assert sum(probability ** 2 for probability in convolution) == Fraction(3, 8)
    identity = reduce_cyclotomic([1])
    modulus_one_indices = []
    for clock, shift in product(range(dimension), repeat=2):
        norm_squared = multiply_cyclotomic(characteristic(clock, shift), characteristic((-clock) % dimension, (-shift) % dimension))
        if norm_squared == identity:
            modulus_one_indices.append([clock, shift])
    assert modulus_one_indices == [[0, 0]]
    tensor_checks = []
    for count in range(1, 9):
        tensor_probabilities = [
            math.prod(entries)
            for entries in product((Fraction(1, 4), Fraction(1, 2), Fraction(1, 4)), repeat=count)
        ]
        assert sum(tensor_probabilities) == 1
        entropy_coefficient = entropy_in_log_two(tensor_probabilities)
        assert entropy_coefficient == Fraction(3 * count, 2)
        assert sum(weight ** 2 for weight in tensor_probabilities) == Fraction(3, 8) ** count
        assert Fraction(7, 2) ** count > 1
        tensor_checks.append({'copies': count, 'nonzero_output_probabilities': len(tensor_probabilities),
                              'output_entropy_coefficient_of_log_2': str(entropy_coefficient)})
    assert 7 > 4
    assert Fraction(16, 9) < 2
    actual_lambda = math.cos(math.pi / 7) ** 2
    denominator = math.log(7) - math.log(1 + Fraction(5, 2) * actual_lambda)
    return {
        'schema_version': 1,
        'status': 'all assertions passed',
        'arithmetic': 'fractions and Q[zeta_7] modulo 1+x+...+x^6; floats only in diagnostics',
        'dimension': dimension,
        'convolution_parameters_mod_7': [scale, scale],
        'permutation_images_checked': len(images),
        'state_diagonal': [str(weight) for weight in state],
        'convolution_diagonal': [str(weight) for weight in convolution],
        'complement_diagonal': [str(weight) for weight in complement],
        'characteristic_indices_checked': dimension ** 2,
        'modulus_one_indices': modulus_one_indices,
        'input_entropy_coefficient_of_log_2': '1',
        'output_entropy_coefficient_of_log_2': '3/2',
        'purity': '1/2',
        'output_purity': '3/8',
        'tensor_checks': tensor_checks,
        'analytic_proof_inputs': ['0 <= lambda <= 1', '7 > 4',
                                  '3/4 < cos(pi/7)^2 < 1', '16/9 < 2'],
        'diagnostic_only_not_proof': {
            'lambda': round(actual_lambda, 9),
            'relative_entropy': round(math.log(Fraction(7, 2)), 9),
            'equation_58_right_side_at_C_sqrt_2': round(math.log(7) / denominator * math.log(2) / 2, 9),
            'lambda_uniform_upper_bound_for_equation_58': round(math.log(7) / 2, 9),
            'equation_59_denominator': round(denominator - math.log(2), 9),
            'equation_59_right_side_at_C_sqrt_2': round(math.log(Fraction(7, 2)) / (denominator - math.log(2)) * math.log(2) / 2, 9),
        },
        'scope': 'Exact finite checks at d=7 and tensor outputs for 1<=n<=8; the all-n result and trigonometric inequalities are proved in note.tex.'
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', type=Path)
    arguments = parser.parse_args()
    output = json.dumps(verify(), indent=2) + '\n'
    if arguments.output:
        arguments.output.write_text(output)
    else:
        print(output, end='')


if __name__ == '__main__':
    main()
