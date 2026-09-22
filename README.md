# Arel Akaunu's portfolio website

Jekyll source for [arelakaunu.github.io](https://arelakaunu.github.io), using the included Minimal Mistakes theme.

## Content

- `_portfolio/`: six individual MSc project pages, published at `/portfolio/<project>/`.
- `_includes/portfolio-grid.html`: project cards shared by the home and portfolio pages.
- `_pages/`: portfolio index, About, contact, and archive pages.
- `_posts/`: original articles.
- `assets/portfolio/`: original reports and figures used on project pages.

Code and complete project documentation live in [msc-data-science-portfolio](https://github.com/arelakaunu/msc-data-science-portfolio). Project results are historical unless explicitly marked as checked during preparation.

## Build locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

GitHub Pages builds the `master` branch. The old upstream theme workflows are unrelated to this Pages deployment. The included theme retains its original licence in LICENSE.
