# Lecture Notes Download Center

A lightweight static site for sharing course notes by unit. It renders a units grid, lets students drill into each unit, and downloads PDFs directly.

## What it does

- Lists units and how many PDFs each unit has
- Shows a per-unit PDF list with download links
- Simple, responsive, animated UI
- Includes a WhatsApp footer for submitting additional materials

## Project structure

```
.
├── index.html
├── styles.css
├── script.js
└── units/
    ├── unit1/
    ├── unit2/
    ├── unit3/
    ├── unit4/
    └── unit5/
```

## Add or update notes

1. Put PDFs in `units/unitX/` folders (for example `units/unit1/intro-to-internet-of-things.pdf`).
2. Update the `unitsData` object in `script.js` to match the unit name and PDF file paths.
3. Open `index.html` in a browser (or host it on GitHub Pages).

## Customize

- Colors and layout: `styles.css`
- Unit names and PDFs: `script.js`
- Page copy: `index.html`
<img width="1919" height="1021" alt="Screenshot 2026-03-10 233242" src="https://github.com/user-attachments/assets/0b37a839-9f67-41f1-8dec-3ac6af1d1587" />


## Browser support

Works in modern browsers (Chrome, Firefox, Safari, Edge).


