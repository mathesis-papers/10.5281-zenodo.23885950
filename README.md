# A counterexample to Bu--Gu--Jaffe's expected mixed-state inverse sumset estimate

**Authors:** Haobo Ma, Wenlin Zhang

We refute the mixed-state inverse sumset estimate expected in Remark 45, equation (58), of Bu, Gu and Jaffe, Quantum Ruzsa Divergence to Quantify Magic (arXiv:2401.14385v3). A computationally diagonal equal mixture of two basis states in dimension seven has quantum-doubling constant sqrt(2) and relative entropy log(7/2) from its mean state, while the proposed bound is at most (1/2)log(7). The contradiction uses exact inequalities and persists for every tensor power. For the same family, we verify that the weaker estimate (59) has a positive denominator and holds strictly, and give the equality case of the companion entropy-growth statement for computationally diagonal states.

- PDF: [frozen public file](paper.pdf)
- DOI: [https://doi.org/10.5281/zenodo.23885951](https://doi.org/10.5281/zenodo.23885951)
- Concept DOI: [https://doi.org/10.5281/zenodo.23885950](https://doi.org/10.5281/zenodo.23885950)
- License: CC-BY-4.0
- Version: 2
- Mathesis record: [bu-gu-jaffe-2025-mixed-state-inverse-sumset](https://mathesis-omega-research.apps.chrono-ai.fun/papers/bu-gu-jaffe-2025-mixed-state-inverse-sumset?version=2)

## How to cite

Haobo Ma, Wenlin Zhang (2026). A counterexample to Bu--Gu--Jaffe's expected mixed-state inverse sumset estimate. Mathesis, version 2. https://doi.org/10.5281/zenodo.23885951

## Statement progress

| Statement | Formalization status | Source | Verification basis |
|---|---|---|---|
| Theorem (s1) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/57b811cedb64c8065c6afac0da57d0fe2c8aa5ab/D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean) | No public receipt |
| Corollary (s2) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/57b811cedb64c8065c6afac0da57d0fe2c8aa5ab/D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean) | No public receipt |
| Corollary (s3) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/57b811cedb64c8065c6afac0da57d0fe2c8aa5ab/D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.lean) | No public receipt |

## Contributions

Original authors are listed above. Formalization contributors and attribution are retained in `formalization/nodes.json`; repository pull requests do not confer verification or credit. Submit formalization attempts through the Mathesis attempt path described in [CONTRIBUTING.md](CONTRIBUTING.md).

<!-- Mathesis generated repository guide; refresh with paper.py front. -->

## Reading and materials

[Paper site](https://papers.trureturing.org/10.5281-zenodo.23885950/) · [Frozen PDF](paper.pdf) · [Citation](CITATION.cff)

[中文阅读](https://papers.trureturing.org/10.5281-zenodo.23885950/bu-gu-jaffe-2025-mixed-state-inverse-sumset/zh/) · [Read in English](https://papers.trureturing.org/10.5281-zenodo.23885950/bu-gu-jaffe-2025-mixed-state-inverse-sumset/en/)

[Slides](https://papers.trureturing.org/10.5281-zenodo.23885950/bu-gu-jaffe-2025-mixed-state-inverse-sumset/slides/) ([sources](books/bu-gu-jaffe-2025-mixed-state-inverse-sumset/slides/)) · [Videos](https://papers.trureturing.org/10.5281-zenodo.23885950/bu-gu-jaffe-2025-mixed-state-inverse-sumset/films/) ([sources](books/bu-gu-jaffe-2025-mixed-state-inverse-sumset/films/))

These are publication routes; available built materials are inventoried in [mathesis-materials.json](https://papers.trureturing.org/10.5281-zenodo.23885950/mathesis-materials.json).

## Book and formalization

Catalog formalization status above is separate from the statement comparisons below. A nearby declaration does not verify the complete written result.

| Book result | Comparison with formal base | Compared declaration |
|---|---|---|
| `public-negation` | same | `D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.result` |
| `seven-level-witness` | variant | `D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.result` |
| `tensor-obstruction` | variant | `D5/S3/Quantum/Magic/MixedStateInverseSumsetRefutation.result` |
| `weaker-estimate` | none | — |

Book stage: **complete**; 0 pending claims. [Statement comparisons](.mathesis/review.json).

## Repository map

| Zone | Location |
|---|---|
| Paper record | `paper.json`, `CITATION.cff`, `paper.pdf`, `manuscript/`, `formalization/nodes.json`, `LICENSES/`, `.mathesis/` |
| Content | `books/bu-gu-jaffe-2025-mixed-state-inverse-sumset/`: Chinese/English text, figures, visualizations, videos, slides, assets |
| Machinery | Upstream and layer managed paths; update with `tbook template update` |
| Repository front | This README, changelog, contribution guide, licence, project/site/pin configuration, `template.d/` |

See [the enforced layout](docs/layer-mathesis/LAYOUT.md). Preparation run records and built outputs stay outside the committed tree.
