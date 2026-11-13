# Mixed-state inverse sumset counterexample

## Read and rebuild

`note.tex` is the single main source, with its bibliography embedded. The note
is three pages and contains a complete elementary proof. Build it with
Tectonic 0.17.0:

```sh
tectonic --untrusted note.tex
```

Alternatively, use a normal LaTeX installation with `amsmath`, `amssymb`,
`amsthm`, `geometry`, `lmodern`, `microtype` and `hyperref`:

```sh
pdflatex -interaction=nonstopmode -halt-on-error note.tex
pdflatex -interaction=nonstopmode -halt-on-error note.tex
```

No external bibliography file, BibTeX pass, shell escape, custom font or local
absolute path is needed. The source archive contains only this guide, the main
LaTeX source, scientific metadata, the exact-check script, its deterministic
output and a member-hash manifest.

## Reproduce the exact checks

Python 3.10 or newer suffices; the checker uses only the standard library:

```sh
python3 verify.py --output verification.json
```

The expected SHA-256 of this deterministic JSON output is
`3fd7d21fd8ce2546c840144cbc4d7b741e3eca944e4b52147c7f9a9a7d8307a5`.

The script exhaustively checks the 49 basis-input images of the admissible
permutation, both reduced diagonal output laws, all 49 characteristic-function
indices in the cyclotomic field, exact entropies and purities, and tensor-output
laws for one through eight copies. Floating-point values are explicitly
diagnostic and are not used to prove any assertion. The proof for all tensor
powers and the needed trigonometric inequalities are in the note.

## Attribution and verification scope

The single-qudit construction is recorded in the trureturing source at commit
`57b811cedb64c8065c6afac0da57d0fe2c8aa5ab`, file
`D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean`, declaration
`D5.S3.Quantum.Magic.MixedStateInverseSumsetRefutation.result`:

https://github.com/the-omega-institute/trureturing/blob/57b811cedb64c8065c6afac0da57d0fe2c8aa5ab/D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean

The declaration `D5.S3.Quantum.Magic.MixedStateInverseSumsetRefutation.result`
in the pinned Lean file proves the single-qudit negation of `claim` under that
file's definitions. The note supplies a self-contained written proof of the
seven-dimensional counterexample and written proofs of the tensor-power
corollaries, equation (59) on that family, and the diagonal entropy-growth
equality classification. The checker covers the finite cases specified above.

The primary posing source is Bu--Gu--Jaffe, arXiv:2401.14385v3, Remark 45,
equation (58). Version 3 was posted on 23 March 2026; the corresponding journal
article appeared in 2025. The exact source version and the journal's bibliographic
identity must not be conflated. Equation (59) is verified on the whole example
family, not asserted to fail. The source's pure-state Theorem 44 is not refuted.

## Creators and license

1. Haobo Ma — ChronoAI Pte Ltd, Singapore.
2. Wenlin Zhang — National University of Singapore; ChronoAI Pte Ltd, Singapore.

The note and original verification material are licensed under Creative Commons
Attribution 4.0 International (`cc-by-4.0`). The PDF and `metadata.json` carry the
same creator order and license.
