# Marc Canlas — Portfolio

A static portfolio for frontend development and UI design. No npm dependencies or build step are required.

## Develop locally

From the project directory, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the server in your local browser. Static hosting services can publish this directory directly; `index.html` is the entry point.

## Structure

- `index.html`: redesigned homepage, seven-project gallery, about, approach, notes, and contact.
- `styles/portfolio.css` and `js/portfolio.js`: standalone homepage styling and interactions.
- `styles/continuity.css` and `js/shared.js`: shared appearance and accessible navigation on supporting pages.
- `projects/`: existing detailed case studies, with reliable return navigation.
- `blog/`, `blog.html`, `profile.html`, `projects.html`: original supporting content with visual refinements.
- `img/`: supplied screenshots, portrait, certificates, and résumé.

The homepage uses local resources only. Supporting pages retain optional external fonts and icons; content and navigation remain available without them. The contact button opens the visitor's email application; there is no backend contact service.

## Editing

Update project cards in `index.html` and their case studies in `projects/`. Replace `img/assets/marc_canlas_resume.pdf` to refresh the résumé. Update the email and social links when needed. Check your original case-study claims and deployed project URLs before sending the portfolio to employers. The incorrect copied GitHub source link for AningKabalen was removed; add its actual repository link when available.

Motion respects the visitor's reduced-motion preference. The homepage includes keyboard focus styles, a skip link, mobile menu state, and filter announcements.
