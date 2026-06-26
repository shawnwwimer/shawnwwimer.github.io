# Shawn Wimer Portfolio

React portfolio app generated from `site.md`.

## Run Locally

Install Node.js first if `node` and `npm` are not available in your terminal.

```powershell
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Build

```powershell
npm run build
```

The production site will be written to `dist/`.

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`. Push `main` to GitHub, then in the repository settings choose:

- Pages source: `GitHub Actions`

For the `shawnwwimer.github.io` user site, keep the Vite base path as `/`.
