# 精确陈述与完整证明

本章对应原稿 §1–§3、Theorem 1、Corollaries 2–3。先固定约定，再区分公开的否定命题和明确的见证结论。

## 对象与目标不等式

设 $d$ 为奇素数，$n\ge1$，$s,t\in\mathbb F_d$ 非零且 $s^2+t^2=1$。在 $n$ 个 $d$ 维系统上，卷积按坐标作用：

$$
U_{s,t}|i,j\rangle=|si+tj,-ti+sj\rangle,
$$

$$
\rho\boxtimes_{s,t}\sigma
=\operatorname{Tr}_2\bigl[U_{s,t}(\rho\otimes\sigma)U_{s,t}^{*}\bigr].
$$

这里 $i,j\in\mathbb F_d^n$；偏迹 $\operatorname{Tr}_2$ 表示丢弃第二个系统。令 $\omega=e^{2\pi i/d}$，$Z|j\rangle=\omega^j|j\rangle$，$X|j\rangle=|j+1\rangle$。单坐标 Weyl 算符及特征函数为

$$
w(p,q)=\omega^{-pq/2}Z^pX^q.
$$

$$
\Xi_\rho(p,q)=\operatorname{Tr}(\rho w(-p,-q)).
$$

指数中的 $1/2$ 是有限域中 $2$ 的逆元。多坐标算符取张量积，指数使用点积。均值态 $\mathcal M(\rho)$ 通过 Weyl 反演保留且仅保留满足 $|\Xi_\rho|=1$ 的系数，其余设为零。定义

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

最大化集合为空时按原文约定 $\operatorname{MG}=0$。$D(\rho\Vert\sigma)=\operatorname{Tr}\rho(\log\rho-\log\sigma)$，前提是 $\operatorname{supp}\rho\subseteq\operatorname{supp}\sigma$；否则取 $+\infty$。所有对数为自然对数，$0\log0=0$。

在 $1<\delta_q[\rho]\le C$、$A=1+\lambda(RP-1)>0$、$B=\log R-\log A>0$ 的范围内，BGJ Remark 45、式 (58) 预期

$$
D(\rho\Vert\mathcal M(\rho))
\le \frac{\log R}{B}\log C.\tag{58}
$$

原文使用零均值条件，即 $\Xi_{\mathcal M(\rho)}$ 仅取 $0,1$。下述反例满足此条件。

::: {.theorem #public-negation title="单系统普遍估计的否定" lean="D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.result" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s1"}
如下普遍命题为假：对每个素数 $d$、每对非零且满足 $s^2+t^2=1$ 的 $s,t\in\mathbb F_d$、每组三个密度态 $\rho,\sigma,\tau$ 和每个实数 $C$，若 $\sigma=\mathcal M(\rho)$、$\tau=\rho\boxtimes_{s,t}\rho$，并满足上面的 $1<\delta_q\le C$、$A>0$、$B>0$，则 $D(\rho\Vert\sigma)\le(\log R/B)\log C$。
:::

::: proof
公开形式证明用下面的七维分布实例化普遍命题，并导出严格矛盾。该命题本身不带零均值限制；它的见证满足零均值，因此也否定了原文所需的受限估计。素数 $2$ 不存在满足条件的非零参数对。下面的明确见证陈述还包含全部 $\ell\in[0,1]$ 的数值界，不能把它与这条否定命题混为同一陈述。
:::

## 七维明确见证

::: {.theorem #seven-level-witness title="七维明确见证" status="written-proof" proof="pf-seven-level-witness" doi="10.5281/zenodo.23885951" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/236" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s1"}
取 $d=7$、$s=t=2$、$\rho=\tfrac12(|0\rangle\langle0|+|1\rangle\langle1|)$。式 (58) 在 $C=\sqrt2$ 时失败。即使把实际的 $\lambda$ 换成任意 $\ell\in[0,1]$，右端也至多为 $\tfrac12\log7$，而 $D(\rho\Vert\mathcal M(\rho))=\log(7/2)>\tfrac12\log7$。所有对数参数和分母都在上述有效范围内。
:::

::: {.proof #pf-seven-level-witness}
按原稿 Theorem 1 的证明。$2^2+2^2\equiv1\pmod7$。独立的均匀 $I,J\in\{0,1\}$ 给出 $2I+2J$ 的三个概率 $1/4,1/2,1/4$，从而

$$
S(\rho)=\log2,\quad S(\rho\boxtimes\rho)=\tfrac32\log2.
$$

$$
\delta_q=\sqrt2>1,\qquad P=\tfrac12.
$$

当 $q\ne0$ 时，$w(-p,-q)$ 的对角元全为零，故 $\Xi_\rho(p,q)=0$。当 $q=0$ 时，

$$
\Xi_\rho(p,0)=\frac{1+\omega^{-p}}2.
$$

$$
|\Xi_\rho(p,0)|=\left|\cos\frac{\pi p}{7}\right|.
$$

模为一仅在 $p=0$ 时成立。Weyl 反演给出 $\mathcal M(\rho)=I_7/7$，故 $R=7$、$D=\log7-\log2$，且均值态的特征函数仅在原点取 $1$，满足零均值条件。最大非单位模为 $\cos(\pi/7)$，所以实际因子 $\lambda=\cos^2(\pi/7)\in(0,1)$。

对任意 $0\le\ell\le1$，

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

末尾严格不等式等价于 $7>4$。这也检查了 $\ell=0,1$ 两个边界；不需要极限过程。
:::

::: {.corollary #tensor-obstruction title="每个正整数份副本都失败" status="written-proof" proof="pf-tensor-obstruction" doi="10.5281/zenodo.23885951" source="Corollary 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/237" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s2"}
对每个整数 $n\ge1$，$\rho_n=\rho^{\otimes n}$ 在 $(\mathbb C^7)^{\otimes n}$ 中，于 $C=2^{n/2}$ 时违反式 (58)。
:::

::: {.proof #pf-tensor-obstruction}
按原稿 Corollary 2。特征函数和卷积输出均按张量积因子化。各因子模不超过一，所以乘积模等于一当且仅当每个因子模等于一。因此均值态为 $I_{7^n}/7^n$。最大非单位模仍是 $\cos(\pi/7)$：至少一个坐标是非原点时乘积至多为这个数，而把其余坐标取原点可取到它。故实际 $\lambda$ 不随 $n$ 改变。独立乘积的特征值相乘、对数相加，得到

$$
R_n=7^n,\quad P_n=2^{-n},\quad S(\rho_n)=n\log2,
$$

$$
D_n=n\log(7/2),\qquad \log\delta_q[\rho_n]=\tfrac n2\log2.
$$

对每个 $\ell\in[0,1]$，令 $A_n=1+\ell((7/2)^n-1)$、$B_n=n\log7-\log A_n$。因 $1\le A_n\le(7/2)^n$，有 $B_n\ge n\log2>0$。式 (58) 的右端因此至多为 $\tfrac n2\log7<D_n$。均值态仍满足零均值条件，$n\ge1$ 保证 $\delta_q>1$。$n=0$ 不在陈述中。
:::

## 为什么较弱的估计仍成立

原文式 (59) 在 $B-S(\rho)>0$ 时为

$$
D(\rho\Vert\mathcal M(\rho))
\le \frac{\log R-S(\rho)}{B-S(\rho)}\log C.\tag{59}
$$

::: {.corollary #weaker-estimate title="乘积族严格满足较弱估计" status="written-proof" proof="pf-weaker-estimate" doi="10.5281/zenodo.23885951" source="Corollary 3" request="https://github.com/the-omega-institute/trureturing-requests/issues/238" mathesis="collected:bu-gu-jaffe-2025-mixed-state-inverse-sumset:2:s3"}
对 [@tensor-obstruction] 的每个 $\rho_n$，式 (59) 的分母严格为正，而且对每个实数 $C\ge\delta_q[\rho_n]=2^{n/2}$，该式严格成立。
:::

::: {.proof #pf-weaker-estimate}
按原稿 Corollary 3。使用实际的 $\lambda=\cos^2(\pi/7)$，而非任意替换因子。由 $0<\pi/7<\pi/6$ 得 $3/4<\lambda<1$。令

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

第一个严格界来自括号内的量严格介于 $\lambda$ 和 $1$ 之间；$\log(4/3)<\tfrac12\log2$ 等价于 $16/9<2$。式 (59) 的分子是 $D_n>0$，且 $\log C\ge\tfrac n2\log2>E_n$，故其右端 $(D_n/E_n)\log C>D_n$。即使 $C=\delta_q$，仍然严格成立。此证明没有作极限交换，也没有断言任意混合态的式 (59)。
:::
