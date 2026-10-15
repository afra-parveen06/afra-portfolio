# S. Afra Parveen Portfolio

A single-page developer portfolio built with plain HTML, CSS, and vanilla JavaScript.

## Recommended structure

```text
afra-portfolio/
├── index.html
├── README.md
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── projects.js
│   ├── animations.js
│   └── contact.js
├── assets/
│   ├── Afra_Parveen_Resume.pdf
│   ├── profile-placeholder.svg
│   ├── images/
│   │   └── afra-profile.jpeg
│   ├── icons/
│   │   └── favicon.svg
│   └── ...
├── .gitignore
└── ...
```

## Files

- `index.html` — all site sections in a single-page structure
- `css/style.css` — dark theme, glassmorphism, layout, responsive styling
- `css/animations.css` — reveal and motion effects
- `js/main.js` — mobile menu, section highlighting, sticky navigation
- `js/projects.js` — filter buttons, modal detail panels
- `js/animations.js` — counters and scroll reveal behavior
- `js/contact.js` — form validation and mail-client fallback
- `assets/` — resume, profile image, and visual assets

## Resume asset requirement

The site includes a download link for the resume at:

`assets/Afra_Parveen_Resume.pdf`

If you replace the file with your final resume version, the download button will point to the correct document without changing the page code.

## Run locally

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit:

`http://localhost:8000`

## Notes

- This portfolio is intentionally framework-free.
- The structure follows the dark, futuristic portfolio layout from the reference design.
- The email form validates input and opens the default mail client when the user submits, without pretending a backend service exists.
