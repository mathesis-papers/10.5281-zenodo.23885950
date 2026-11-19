# Seven positions, two coin outcomes

Label the outcomes of a fair coin $0$ and $1$. Toss it twice independently, multiply each outcome by $2$, and add. Four equally likely input pairs give $0,2,2,4$. This small experiment defeats a specific proposed inverse sumset estimate for mixed quantum states.

Haobo Ma and Wenlin Zhang show that small growth of uncertainty when two independent copies are combined does not imply the quantitative bound expected by Bu, Gu and Jaffe in Remark 45, equation (58). Their counterexample needs no quantum superposition: it is an ordinary two-point probability distribution inside a seven-dimensional system. The decisive comparison is

$$
\underbrace{\log(7/2)}_{\text{actual discrepancy}} > \underbrace{\tfrac12\log7}_{\text{largest proposed bound}}.
$$

We will connect the question, the experiment and this strict inequality before giving the [complete statements and proofs](statements.md). All logarithms are natural.

## Reading structure backwards from growth

A random number supported on $0$ and $1$ has two possible values. Adding two independent copies produces three possible values. In contrast, a uniform random number on all seven residues stays uniform after adding an independent copy modulo seven. Modular arithmetic is arithmetic on the clock face $0,1,\ldots,6$: for example, $6+2=1$.

Inverse sumset theory asks the reverse question: if addition causes little growth, must the input be close to a distribution with additive structure? We can measure growth by counting possible values, or by using entropy, which also accounts for their probabilities. T. Tao studied the classical Shannon entropy problem; K. Bu, W. Gu and A. Jaffe extended related questions to quantum convolution. This note tests one precise inequality in that extension.

For a finite experiment with probabilities $p_j$, entropy is

$$
H(p)=-\sum_{j:p_j>0}p_j\log p_j.
$$

If there are $m$ equally likely outcomes, each carries information $-\log(1/m)=\log m$, so the average is also $\log m$. Zero-probability terms contribute $0$, following $0\log0=0$. A fair coin has entropy $\log2$; a certain outcome has entropy $0$. Entropy is average information, rather than a count of outcomes.

## Why a probability experiment is a quantum counterexample

A seven-dimensional system has seven distinguishable basis states, written $|0\rangle,\ldots,|6\rangle$. The matrix

$$
\rho=\operatorname{diag}(1/2,1/2,0,0,0,0,0)
$$

chooses each of the first two states with probability $1/2$. A diagonal matrix records ordinary probabilities, with no coherence between different basis states. In general, a density matrix is positive semidefinite and has trace one. Our example meets those conditions because its diagonal entries are nonnegative and sum to one. Its quantum entropy is precisely the probability entropy above.

The convolution of Bu, Gu and Jaffe first transforms the two input labels by

$$
(i,j)\longmapsto(2i+2j,-2i+2j)\pmod7,
$$

then discards the second output label. The admissibility condition says that the squared coefficients sum to one; here $2^2+2^2=8\equiv1\pmod7$. The transformation also has determinant one, so it simply permutes the forty-nine label pairs. For our diagonal distribution, the retained label has the law of $2I+2J$.

| Input $(I,J)$ | Output |
|---|---|
| $(0,0)$ | $0$ |
| $(0,1)$ | $2$ |
| $(1,0)$ | $2$ |
| $(1,1)$ | $4$ |

Each row has probability $1/4$. The output probabilities at $0,2,4$ are therefore $1/4,1/2,1/4$. The two middle events merging is the starting point of the calculation.

$$
S(\rho)=\log2,
\qquad S(\rho\boxtimes\rho)=\tfrac32\log2.
$$

To turn entropy growth into a quantity resembling a size ratio, define the quantum-doubling constant

$$
\delta_q[\rho]=\exp\bigl(S(\rho\boxtimes\rho)-S(\rho)\bigr)=\sqrt2.
$$

Entropy grows by half of $\log2$; it does grow. The question is whether such limited growth supports the proposed discrepancy bound.

## Why the comparison state fills all seven positions

The “mean state” $\mathcal M(\rho)$ is not an arithmetic average of two states. It uses Fourier-like coefficients to identify perfectly determined constraints, retaining exactly the coefficients of absolute value one.

Picture a coefficient as the average of two unit arrows in the plane. With $\omega=e^{2\pi i/7}$, a rotation by one seventh of a turn, the relevant coefficients are

$$
\Xi_\rho(p,0)=\frac{1+\omega^{-p}}2.
$$

Whenever $p\ne0$, the arrows point in different directions, so their average has length strictly less than one. Other coefficients involve shifting basis states; a diagonal distribution makes those coefficients zero. Only the origin coefficient survives. Reconstructing the mean state gives the uniform distribution on all seven positions: $\mathcal M(\rho)=I_7/7$. Its rank $R$ is $7$, the number of independent directions it supports.

Relative entropy measures discrepancy from this mean state. Each outcome that actually occurs has probability $1/2$, while its reference probability is $1/7$. Thus

$$
D(\rho\Vert\mathcal M(\rho))
=\sum_{j=0}^1\frac12\log\frac{1/2}{1/7}
=\log(7/2).
$$

This is an information discrepancy, rather than a Euclidean distance.

## An exact contradiction, without decimals

The proposed estimate also uses purity $P=\operatorname{Tr}\rho^2$. For a diagonal state, purity is the sum of squared probabilities, here $1/2$. A further factor $\lambda$ is determined by the largest imperfect characteristic coefficient. Here it equals $\cos^2(\pi/7)$, between zero and one. We need not evaluate it yet: allowing the whole interval makes the contradiction clearer.

At $C=\delta_q=\sqrt2$, the right-hand side of (58) is

$$
\frac{\log7}{\log7-\log(1+5\lambda/2)}\,\frac{\log2}{2}.
$$

Since $0\le\lambda\le1$, we have $1+5\lambda/2\le7/2$. The denominator is at least $\log2>0$, so this expression is at most $\tfrac12\log7$. Yet

$$
\log(7/2)>\tfrac12\log7
\quad\Longleftrightarrow\quad 7>4.
$$

This is an exact contradiction. Division by zero and numerical rounding play no role.

The short film follows the same mechanism through input pairs, output probabilities, the mean state and the failed bound.

::: {.film src="001-two-point-obstruction"}
Two points among seven: four inputs lead to one strict inequality.
:::

## Independent copies and neighboring conclusions

Repeat the seven-dimensional experiment independently $n$ times, giving $\rho_n=\rho^{\otimes n}$. The input has $2^n$ equally likely outcomes, while its mean is uniform on $7^n$ labels. Independence makes entropy and relative entropy additive. The actual discrepancy becomes $n\log(7/2)$, while the proposed bound is still at most $\tfrac n2\log7$. Every integer $n\ge1$ gives a counterexample; this is a proof for all copies, rather than a check of several dimensions.

Equation (59) in the same source subtracts the input entropy from both numerator and denominator. Its smaller denominator allows a larger bound. The note proves that, for this product family, the denominator is strictly positive and (59) holds strictly for every $C\ge2^{n/2}$. This result concerns this family; it does not establish (59) for arbitrary mixed states.

A useful boundary case is zero entropy growth. For any distribution of vectors modulo seven, $H(2X+2Y)\ge H(X)$, with equality exactly for a uniform distribution on an affine subspace. The [appendix](appendix.md) explains how conditional entropy forces this translation structure. Our two-point law is outside that class and has strictly positive entropy growth.

The academic talk develops the same argument through the question, the witness, independent copies and the result's scope.

::: {.slides src="seminar"}
Aligned Chinese and English academic talks, with speaker notes and technical appendices.
:::

The counterexample corrects this specific quantitative expectation for extending a pure-state result to mixed states. The pure-state Theorem 44 of Bu, Gu and Jaffe remains intact. The obstruction already exists in classical probability; the note does not supply a replacement universal mixed-state bound. It credits the single-system construction to trureturing contributors and provides a readable argument and the product-family and weaker-estimate consequences. [Sources and contributions](sources.md) explain the respective scope of the written proofs and the public formal theorem.
