# The Rightly Guided Caliphs

A static website on the four Rightly Guided Caliphs: Abu Bakr, Umar, Uthman and Ali (may Allah be pleased with them). Each page collects the Quranic verses connected to the caliph, the words of the Prophet ﷺ about him, the testimony of the Companions, his caliphate, his character and sayings, and the voice of scholars across the centuries, with references.

## Files

- `index.html` – home page
- `abu-bakr.html`, `umar.html`, `uthman.html`, `ali.html` – one page per caliph
- `assets/style.css` – shared styles (automatic light/dark with manual toggle, responsive)
- `assets/main.js` – theme toggle, mobile menu, section highlighting

No build step. Fonts load from Google Fonts; everything else is in this folder.

## Publish on GitHub Pages

1. Create a new public repository on GitHub.
2. Upload all files and the `assets` folder (drag and drop in the browser works).
3. Go to **Settings → Pages**, choose branch `main` and folder `/ (root)`, then save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Theme

The site follows the device's light or dark setting. The button in the top bar cycles **Auto → Light → Dark** and remembers the choice in the browser.
