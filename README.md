# Portfolio

This repository contains the source for my personal portfolio website.

## What’s in this repo
- **`index.html`** — Main page markup (projects, about, skills, contact).
- **`styles.css`** — Site styling.
- **`script.js`** — Small client-side helpers (sets the current year and provides a contact form `mailto:` fallback).
- **`images/`** — Images used by the site (favicon, portrait, and other graphics).

## Run locally
Because this is a static site, you can serve it with any simple web server.

### Python
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

### Node
```bash
npx serve
```

## Deploy
This site can be hosted on **GitHub Pages** (or any static host) by serving:
- `index.html`
- `styles.css`
- `script.js`
- `images/`

## Notes
- The contact form uses a `mailto:` link (it opens the user’s email client rather than sending mail from a backend).
