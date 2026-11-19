# Exact statements and complete proofs

This chapter follows manuscript §§1–3, Theorem 1 and Corollaries 2–3. We fix the conventions before distinguishing the public negation from the explicit witness conclusions.

## Objects and the proposed inequality

Let $d$ be an odd prime, $n\ge1$, and let nonzero $s,t\in\mathbb F_d$ satisfy $s^2+t^2=1$. On $n$ systems of dimension $d$, convolution acts coordinatewise:

$$
U_{s,t}|i,j\rangle=|si+tj,-ti+sj\rangle,
$$

$$
\rho\boxtimes_{s,t}\sigma
=\operatorname{Tr}_2\bigl[U_{s,t}(\rho\otimes\sigma)U_{s,t}^{*}\bigr].
$$

Here $i,j\in\mathbb F_d^n$; the partial trace $\operatorname{Tr}_2$ discards the second system. Put $\omega=e^{2\pi i/d}$, $Z|j\rangle=\omega^j|j\rangle$, and $X|j\rangle=|j+1\rangle$. The one-coordinate Weyl operator and characteristic function are

$$
w(p,q)=\omega^{-pq/2}Z^pX^q.
$$

$$
\Xi_\rho(p,q)=\operatorname{Tr}(\rho w(-p,-q)).
$$

Division by two in the exponent uses the inverse of $2$ in the finite field. For multiple coordinates, take tensor products and use the dot product in the exponent. The mean state $\mathcal M(\rho)$ is reconstructed by Weyl inversion after retaining exactly the coefficients with $|\Xi_\rho|=1$ and setting the others to zero. Define

$$
S(\rho)=-\operatorname{Tr}(\rho\log\rho).
$$

$$
R=\operatorname{rank}\mathcal M(\rho),\qquad P=\operatorname{Tr}\rho^2.
$$

$$
\delta_q[\rho]=\exp\bigl(S(\rho\boxtimes\rho)-S(\rho)\bigr).
$$

$$
\lambda=(1-\operatorname{MG}(\rho))^2.
$$

$$
\operatorname{MG}(\rho)
=1-\max_{0<|\Xi_\rho(x)|<1}|\Xi_\rho(x)|.
$$

When the maximizing set is empty, the source sets $\operatorname{MG}=0$. Relative entropy is $D(\rho\Vert\sigma)=\operatorname{Tr}\rho(\log\rho-\log\sigma)$ when $\operatorname{supp}\rho\subseteq\operatorname{supp}\sigma$, and $+\infty$ otherwise. All logarithms are natural, with $0\log0=0$.

On the domain $1<\delta_q[\rho]\le C$, $A=1+\lambda(RP-1)>0$ and $B=\log R-\log A>0$, BGJ Remark 45, equation (58), expects

$$
D(\rho\Vert\mathcal M(\rho))
\le \frac{\log R}{B}\log C.\tag{58}
$$

The source uses a zero-mean condition: $\Xi_{\mathcal M(\rho)}$ takes values in $\{0,1\}$. The counterexamples below satisfy it.

::: {.theorem #public-negation title="Negation of the universal single-system estimate" lean="D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.result" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s1"}
The following universal proposition is false: for every prime $d$, every nonzero admissible pair $s,t\in\mathbb F_d$ with $s^2+t^2=1$, every triple of density states $\rho,\sigma,\tau$, and every real $C$, if $\sigma=\mathcal M(\rho)$, $\tau=\rho\boxtimes_{s,t}\rho$, and $1<\delta_q\le C$, $A>0$, $B>0$ hold, then $D(\rho\Vert\sigma)\le(\log R/B)\log C$.
:::

::: proof
The public formal proof instantiates the universal proposition with the seven-dimensional distribution below and derives a strict contradiction. The proposition itself has no zero-mean restriction; its witness has zero mean and therefore also refutes the restricted source expectation. Prime dimension $2$ admits no nonzero admissible parameter pair. The explicit witness statement below additionally gives the bound for every $\ell\in[0,1]$; it is a different statement from this public negation.
:::

## The explicit seven-level witness

::: {.theorem #seven-level-witness title="Explicit seven-level witness" status="written-proof" proof="pf-seven-level-witness" doi="10.5281/zenodo.23885951" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/236" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s1"}
Take $d=7$, $s=t=2$ and $\rho=\tfrac12(|0\rangle\langle0|+|1\rangle\langle1|)$. Equation (58) fails at $C=\sqrt2$. Even replacing the actual $\lambda$ by any $\ell\in[0,1]$, its right-hand side is at most $\tfrac12\log7$, whereas $D(\rho\Vert\mathcal M(\rho))=\log(7/2)>\tfrac12\log7$. All logarithm arguments and denominators lie in the stated valid domain.
:::

::: {.proof #pf-seven-level-witness}
Following the proof of manuscript Theorem 1, $2^2+2^2\equiv1\pmod7$. Independent uniform $I,J\in\{0,1\}$ give probabilities $1/4,1/2,1/4$ for $2I+2J$, hence

$$
S(\rho)=\log2,\quad S(\rho\boxtimes\rho)=\tfrac32\log2.
$$

$$
\delta_q=\sqrt2>1,\qquad P=\tfrac12.
$$

For $q\ne0$, every diagonal entry of $w(-p,-q)$ is zero, so $\Xi_\rho(p,q)=0$. On $q=0$,

$$
\Xi_\rho(p,0)=\frac{1+\omega^{-p}}2.
$$

$$
|\Xi_\rho(p,0)|=\left|\cos\frac{\pi p}{7}\right|.
$$

The modulus is one exactly at $p=0$. Weyl inversion gives $\mathcal M(\rho)=I_7/7$, so $R=7$ and $D=\log7-\log2$. The mean characteristic function is one at the origin and zero elsewhere, establishing zero mean. The largest nonunit modulus is $\cos(\pi/7)$, so the actual factor is $\lambda=\cos^2(\pi/7)\in(0,1)$.

For any $0\le\ell\le1$,

$$
1\le A_\ell=1+\tfrac52\ell\le\tfrac72.
$$

$$
B_\ell=\log7-\log A_\ell\ge\log2>0.
$$

$$
\frac{\log7}{B_\ell}\log\sqrt2
\le\tfrac12\log7<\log7-\log2.
$$

The final strict inequality is equivalent to $7>4$. This also covers the endpoints $\ell=0,1$; no limiting passage is required.
:::

::: {.corollary #tensor-obstruction title="Failure for every positive number of copies" status="written-proof" proof="pf-tensor-obstruction" doi="10.5281/zenodo.23885951" source="Corollary 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/237" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s2"}
For every integer $n\ge1$, $\rho_n=\rho^{\otimes n}$ in $(\mathbb C^7)^{\otimes n}$ violates (58) at $C=2^{n/2}$.
:::

::: {.proof #pf-tensor-obstruction}
Following manuscript Corollary 2, characteristic functions and convolution outputs factor under tensor products. Each factor has modulus at most one, so the product has modulus one exactly when every factor does. Thus the mean is $I_{7^n}/7^n$. The largest nonunit modulus remains $\cos(\pi/7)$: any nonorigin coordinate bounds the product by this number, and taking the other coordinates at the origin attains it. The actual $\lambda$ is consequently independent of $n$. Eigenvalues multiply and logarithms add, giving

$$
R_n=7^n,\quad P_n=2^{-n},\quad S(\rho_n)=n\log2,
$$

$$
D_n=n\log(7/2),\qquad \log\delta_q[\rho_n]=\tfrac n2\log2.
$$

For each $\ell\in[0,1]$, put $A_n=1+\ell((7/2)^n-1)$ and $B_n=n\log7-\log A_n$. Since $1\le A_n\le(7/2)^n$, we have $B_n\ge n\log2>0$. The right-hand side of (58) is at most $\tfrac n2\log7<D_n$. The mean again has zero mean, and $n\ge1$ ensures $\delta_q>1$. The statement excludes $n=0$.
:::

## Why the weaker estimate survives

Source equation (59), on the domain $B-S(\rho)>0$, is

$$
D(\rho\Vert\mathcal M(\rho))
\le \frac{\log R-S(\rho)}{B-S(\rho)}\log C.\tag{59}
$$

::: {.corollary #weaker-estimate title="Strict weaker estimate for the product family" status="written-proof" proof="pf-weaker-estimate" doi="10.5281/zenodo.23885951" source="Corollary 3" request="https://github.com/the-omega-institute/trureturing-requests/issues/238" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s3"}
For each $\rho_n$ of [@tensor-obstruction], the denominator of (59) is positive, and (59) holds strictly for every real $C\ge\delta_q[\rho_n]=2^{n/2}$.
:::

::: {.proof #pf-weaker-estimate}
Following manuscript Corollary 3, use the actual $\lambda=\cos^2(\pi/7)$ rather than an arbitrary replacement. Since $0<\pi/7<\pi/6$, we have $3/4<\lambda<1$. Put

$$
\begin{aligned}
E_n&=B_n-n\log2\\
&=-\log\bigl(\lambda+(1-\lambda)(2/7)^n\bigr).
\end{aligned}
$$

$$
\begin{aligned}
0<E_n&<-\log\lambda<\log(4/3)\\
&<\tfrac12\log2\le\tfrac n2\log2.
\end{aligned}
$$

The first strict bounds hold because the logarithm argument lies strictly between $\lambda$ and $1$; $\log(4/3)<\tfrac12\log2$ is equivalent to $16/9<2$. The numerator in (59) is $D_n>0$, while $\log C\ge\tfrac n2\log2>E_n$. Hence its right-hand side $(D_n/E_n)\log C$ is strictly greater than $D_n$, including at $C=\delta_q$. No exchange of limits is used, and no claim about (59) for arbitrary mixed states follows.
:::
