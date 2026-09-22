---
title: "Squash ratings and behavioural effects"
permalink: "/portfolio/squash-ratings/"
layout: "project"
classes: "wide"
author_profile: false
toc: true
toc_sticky: true
toc_label: "On this page"
share: false
read_time: true
order: 1
project_type: "Research case study"
stack: "Statistical inference · Sports analytics"
excerpt: "Testing fatigue and mismatch effects in squash, with 237,114 paired player-days and 3.83 million matches in the reported analyses."
---

[← All projects](/portfolio/){: .project-back}

[View project on GitHub](https://github.com/arelakaunu/msc-data-science-portfolio/tree/main/projects/squash-ratings){: .btn .btn--primary}

**MSc dissertation · March 2026 · Research case study**

Can observed squash results depart systematically from rating-based expectations because of same-day fatigue or effort modulation in uneven contests?

[Read the original dissertation](/assets/portfolio/squash-ratings/thesis.pdf).

## My contribution

I analysed an anonymised, precompiled SquashLevels dataset, designed the fatigue and mismatch comparisons, interpreted the results, and wrote the dissertation. The SquashLevels team prepared the relational joins before the project; those SQL joins were not my work.

## Approach and reported findings

- **Fatigue:** compare the first and last qualifying match within a player-day, using matches with weighting at least 0.75. Analyse changes in log performance deviation using paired Wilcoxon tests and demand groups based on points played in the first match.
- **Mismatch:** use the stronger player's perspective and fit a quadratic relationship between log rating ratio and log observed dominance; compare residuals across mismatch groups.

| Analysis | Reported evidence | Interpretation |
|---|---|---|
| Same-day fatigue | 237,114 player-day pairs; median changes of −0.022, +0.024, and +0.029 across low, medium, and high demand groups | No consistent fatigue-related underperformance across demand groups |
| Mismatch | 3,826,051 matches; quadratic baseline R² approximately 0.305 | Negative residual medians in moderate and extreme mismatches were consistent with reduced dominance relative to the fitted expectation |

These are dissertation results, not a new replication. The observational design does not establish that effort caused the residual patterns. Repeated observations, match-order quality, proxies for physical demand, and unmeasured context limit interpretation; large samples also make practical effect size especially important.

![Distribution of changes in performance deviation, from the dissertation](/assets/portfolio/squash-ratings/figures/fatigue_histogram.png)

![Residuals grouped by rating mismatch, from the dissertation](/assets/portfolio/squash-ratings/figures/residual_boxplot_2.png)

*Original dissertation figure: residuals compare observed dominance with the fitted baseline.*

## Available material

The thesis and selected original aggregate figures are included. The supplied dissertation ZIP contained LaTeX and figures, but no executable analysis scripts or match dataset. This is therefore a research case study, not a reproducible analysis package. The underlying match records are not redistributed.
