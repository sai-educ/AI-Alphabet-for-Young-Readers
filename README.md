
# AI Alphabet for Young Readers

A playful A–Z of AI with kid‑friendly definitions and 1‑minute activities.  
**Live pages:** `index.html`, `learn.html`, `alphabet.html`, `about.html`, `quiz.html`

---

## Attribution

Based on a Google Slideshow created by **Robert W. Maloy, Ed.D., Sharon A. Edwards, Ed.D., Chenyang Xu, Aubrey Coyne, and Julia Plotniak**.  
Slides: https://docs.google.com/presentation/d/1BxJaOYBW1A5cs4-DLyNE5N7zLWx_gFYAHP5u5hQuBf0/edit?usp=sharing

Adapted and developed as a learning technology web app by **Sai Gattupalli, Ph.D.**.  
Code (open access): https://github.com/sai-educ/AI-Alphabet-for-Young-Readers

License: **CC BY‑NC‑SA 4.0** — share and adapt for non‑commercial education with attribution.

---

## Project Structure

```
/
├─ index.html        # Landing page
├─ learn.html        # Alphabet grid (A–Z tiles)
├─ alphabet.html     # Detail card for a selected letter (uses ?letter=A)
├─ about.html        # Project story + attribution
├─ quiz.html         # Placeholder for future games
├─ style.css         # Global styles (responsive, accessible)
└─ script.js         # Data + page bootstrapping
```

---

## Development

- **No build step needed.** This is a static site.
- Open `index.html` directly or deploy the folder on Vercel/Netlify/GitHub Pages.

### Data
All A–Z data (letter, word, definition, activity) lives in **`script.js`** as `AI_ALPHABET`.  
Edit in one place and both `learn.html` and `alphabet.html` reflect changes.

### How the pages work

- `learn.html` finds `.alphabet-grid` and **auto‑renders** the 26 tiles on `DOMContentLoaded`.
- Clicking a tile navigates to `alphabet.html?letter=Q`.
- `alphabet.html` reads the `?letter` parameter and displays the detail card, with **Previous/Next** navigation and a progress bar.

### Common Issues / Fixes

1. **Grid doesn’t show on Learn page**  
   - Ensure `<script src="script.js" defer></script>` is present at the bottom of `learn.html`  
   - Confirm the file name is **exactly** `script.js` (case‑sensitive on some hosts).
   - Hard refresh: `Cmd+Shift+R` / `Ctrl+F5`.

2. **Clicking a tile 404s**  
   - Make sure `alphabet.html` exists at the same directory level as `learn.html`.

3. **Icons/Fonts blocked**  
   - Check that Google Fonts is allowed by your host’s CSP, or self‑host the fonts.

---

## Roadmap

- Add quiz mini‑games (match, drag‑and‑drop)
- Simple progress badges (localStorage)
- Illustrations for each letter
