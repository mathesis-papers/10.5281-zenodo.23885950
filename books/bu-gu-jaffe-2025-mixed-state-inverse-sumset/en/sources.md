# Sources, formal evidence and contributions

This reading explains version 2 by Haobo Ma (Chrono AI, Singapore) and Wenlin Zhang (National University of Singapore and Chrono AI, Singapore). It preserves the note's attribution of the single-qudit construction to trureturing contributors. Bu, Gu and Jaffe formulated the quantum estimate; Tao's earlier work supplies the classical entropic inverse-sumset context. The references below follow the note and its public source, rather than a new priority survey.

## What the formal theorem states

The [public Lean source at the book's selected revision](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean) proves the negation of the universal single-qudit estimate with its explicit positivity and doubling hypotheses, as stated in [@public-negation]. Its proof uses the same equal two-level mixture in dimension seven. The manuscript's stronger explicit witness statement [@seven-level-witness] includes every replacement factor in $[0,1]$; [@tensor-obstruction] concerns every tensor power; [@weaker-estimate] concerns equation (59). These complete statements have written proofs here and focused formalization requests. A proof of the universal negation alone is not a public theorem stating all three conclusions.

The manuscript also reports exact-arithmetic checks of the seven-dimensional construction and tensor entropies for $1\le n\le8$. Those finite checks corroborate the examples; the tensor factorization proof establishes the result for every $n\ge1$. This reading does not rerun the manuscript's program or claim a fresh Lean build.

## Contribute a precise next step

Coordinate on the canonical requests: [explicit witness bounds](https://github.com/the-omega-institute/trureturing-requests/issues/236), [the tensor-power family](https://github.com/the-omega-institute/trureturing-requests/issues/237), and [strict validity of the weaker estimate](https://github.com/the-omega-institute/trureturing-requests/issues/238). The first reuses the existing witness ingredients; the second adds the independent-product reasoning; the third reuses the product identities and proves the remaining logarithmic comparison. The public refutation needs no duplicate proof task.

Use a focused branch in a contributor fork and submit directly to [trureturing's existing contribution route](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md). Preserve original mathematical and formalization attribution. The shared request coordinates the scope; a GitHub merge does not by itself establish exact manuscript coverage or platform credit.

## References

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
