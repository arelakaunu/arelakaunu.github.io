---
title: "Statistical test power through simulation"
permalink: "/portfolio/statistical-test-power/"
layout: "project"
classes: "wide"
author_profile: false
toc: true
toc_sticky: true
toc_label: "On this page"
share: false
read_time: true
order: 5
project_type: "R simulation"
stack: "R · Monte Carlo · Hypothesis testing"
excerpt: "Comparing false positives and detection power for Shapiro-Wilk, Kolmogorov-Smirnov, and Anderson-Darling tests."
---

[← All projects](/portfolio/){: .project-back}

[View project on GitHub](https://github.com/arelakaunu/msc-data-science-portfolio/tree/main/projects/statistical-test-power){: .btn .btn--primary}

**R · Monte Carlo simulation · Hypothesis testing · December 2024**

How does sample size affect the ability of a statistical test to detect a distributional difference?

[Read the R Markdown source](https://github.com/arelakaunu/msc-data-science-portfolio/blob/main/projects/statistical-test-power/test-power.Rmd).

## Experiment

The original analysis uses 10,000 simulation trials for Shapiro-Wilk and Kolmogorov-Smirnov tests, and 1,000 for the more expensive Anderson-Darling comparison.

- Check Shapiro-Wilk's false positive rate with normal data.
- Measure its power with uniform and heavy-tailed t data at sample sizes 10, 50, and 200.
- Compare two-sample KS and AD tests for a uniform versus normal distribution at sample sizes 20, 50, 200, and 500.

In the submitted run, AD had higher power at the two larger sample sizes: 0.891 versus 0.6374 at n=500, and 0.319 versus 0.2111 at n=200. These are distribution-specific simulation estimates, not a universal ranking of tests. New seeded runs can produce slightly different numbers.

## Run

Install R and the `kSamples`, `rmarkdown`, and `knitr` packages. Rendering HTML also requires Pandoc, normally available with RStudio. From this directory:

```r
install.packages(c("kSamples", "rmarkdown", "knitr"))
rmarkdown::render("test-power.Rmd")
```

No external data is needed. Simulation loops are retained, with a seed added for repeatability. The default workload can take time. The copied assessment questions were replaced by descriptive headings and an unsupported numerical claim in the original conclusion was corrected. This project presents the self-contained simulation study; short exam answers and unrelated probability exercises were left out.
