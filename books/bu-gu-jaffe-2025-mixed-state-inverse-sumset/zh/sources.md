# 来源、形式证据与贡献

本读物解释 Haobo Ma（Chrono AI，新加坡）与 Wenlin Zhang（新加坡国立大学及 Chrono AI，新加坡）的第 2 版论文。单 qudit 构造按原稿归功于 trureturing contributors。Bu、Gu 和 Jaffe 提出了这里的量子估计；Tao 更早的工作提供了经典熵逆和集背景。下列参考资料沿用原稿及其公开来源，并非新做的优先权调查。

## 形式定理陈述了什么

[本书所选版本的公开 Lean 源码](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean)证明了带明确正性和倍增假设的单 qudit 普遍估计为假，即 [@public-negation]。证明使用同一个七维等概率两基态混合。原稿更强的明确见证陈述 [@seven-level-witness] 包含 $[0,1]$ 内的每个替换因子；[@tensor-obstruction] 涉及每个张量幂；[@weaker-estimate] 涉及式 (59)。这些完整结论在这里具有书面证明，并有范围明确的形式化请求。普遍命题的否定本身，并不是公开陈述这三项完整结论的定理。

原稿还报告了七维构造和 $1\le n\le8$ 的张量熵精确算术检查。这些有限检查提供佐证；对每个 $n\ge1$ 成立的依据是张量因子化证明。本读物没有重新执行原稿程序，也不声称进行了一次新的 Lean 构建。

## 为一个明确的下一步作贡献

在规范共享请求上协调：[明确见证界](https://github.com/the-omega-institute/trureturing-requests/issues/236)、[张量幂族](https://github.com/the-omega-institute/trureturing-requests/issues/237)、[较弱估计的严格成立](https://github.com/the-omega-institute/trureturing-requests/issues/238)。第一项复用已有见证的证明材料，第二项增加独立乘积的推理，第三项复用乘积恒等式并完成剩余的对数比较。公开的否定结论不需要再登记一个重复证明任务。

在贡献者自己的 fork 中建立聚焦分支，直接按 [trureturing 已有贡献路线](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md)提交。保留数学原作者与形式化贡献者各自的署名。共享请求用来协调范围；GitHub 合并本身不表示整篇原稿已完成精确形式验证，也不自动产生平台积分。

## 参考文献

- Haobo Ma and Wenlin Zhang. *A counterexample to Bu--Gu--Jaffe's expected mixed-state inverse sumset estimate*, version 2. [DOI:10.5281/zenodo.23885951](https://doi.org/10.5281/zenodo.23885951). [PDF](https://zenodo.org/api/records/23885951/files/note-v2.pdf/content), [source archive](https://zenodo.org/api/records/23885951/files/source-v2.zip/content). CC BY 4.0. Concept DOI: [10.5281/zenodo.23885950](https://doi.org/10.5281/zenodo.23885950).
- K. Bu, W. Gu and A. Jaffe. *Quantum Ruzsa Divergence to Quantify Magic*. IEEE Transactions on Information Theory **71** (2025), 2726–2740. [DOI:10.1109/TIT.2025.3543276](https://doi.org/10.1109/TIT.2025.3543276). Numbered statements here refer to [arXiv:2401.14385v3](https://arxiv.org/abs/2401.14385v3), Remark 45, (58)–(59), and Theorem 44.
- K. Bu, W. Gu and A. Jaffe. *Discrete quantum Gaussians and central limit theorem*. Advances in Mathematics **503** (2026), 111204. [DOI:10.1016/j.aim.2026.111204](https://doi.org/10.1016/j.aim.2026.111204).
- K. Bu, W. Gu and A. Jaffe. *Quantum entropy and central limit theorem*. PNAS **120**(25) (2023), e2304589120. [DOI:10.1073/pnas.2304589120](https://doi.org/10.1073/pnas.2304589120).
- T. Tao. *Sumset and inverse sumset theory for Shannon entropy*. Combinatorics, Probability and Computing **19** (2010), 603–639. [DOI:10.1017/S0963548309990642](https://doi.org/10.1017/S0963548309990642), Theorem 1.11(i), §5.
- M. M. Goodarzi. *Submodularity of entropy under quantum convolution*. [arXiv:2609.40211v1](https://arxiv.org/abs/2609.40211v1) (2026), Theorem 4.1; further context cited in the note.
- trureturing contributors. [MixedStateInverseSumsetRefutation, paper-cited source](https://github.com/the-omega-institute/trureturing/blob/57b811cedb64c8065c6afac0da57d0fe2c8aa5ab/D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean).

<style>pre:has(> code[class*="typst"]) { display: none; }</style>

```{=typst}
#pagebreak()
```
