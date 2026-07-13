# Project: yanircalisar

## What
A single-page personal website showcasing Yanir Calisar's career: projects
built over the years, links to social media/content, and a summary of
professional work.

## Who for
Public visitors — recruiters, collaborators, and anyone looking up Yanir's
work online.

## How it fits
Standalone personal site, hosted on GitHub Pages, tied 1:1 to this repo.
No backend; static content only for now.

## Domain
Custom domain `ycalisar.com` purchased via GoDaddy. Site will be served on
GitHub Pages with this domain — needs a `CNAME` file in the repo and DNS
records (A/ALIAS to GitHub Pages IPs or CNAME to `<user>.github.io`) set up
in GoDaddy when the site is ready to deploy.

## Tech
Astro (static build), plain CSS, minimal vanilla JS islands. Deployed via
GitHub Actions (`withastro/action`) to GitHub Pages on push to `main`.
Content lives in `src/data/*.ts`.

## Security
This repo is **public**. Before every commit, run `/security-review` (or
otherwise check the diff) to confirm no API keys, tokens, credentials, or
sensitive personal data (private financials, exact ownership/cap table,
family/relationship details, medical info, etc. — see the content brief's
privacy rules) are being committed.

## Status
One-page site built: hero, story timeline, Tuvis deep dive, filterable
projects directory, sport/race log, music & community, media/interviews,
travel & diving, contact. Several fields use `[VERIFY ...]` / `[ADD ...]`
placeholders pending confirmation from Yanir before publishing exact
numbers, dates, and private figures (ARR, ownership, bank counts, family
names). GitHub Pages source must be set to "GitHub Actions" in repo
settings, and GoDaddy DNS still needs to point at GitHub Pages.
