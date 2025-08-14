
# AI Alphabet for Young Readers

A playful A–Z of AI with kid‑friendly definitions and 1‑minute activities.  

### Go here for live app: 
https://aialphabet.usablemath.org/ 

### Screenshots:
<img width="1200" height="823" alt="Landing page" src="https://github.com/user-attachments/assets/a43b897b-bb81-4928-a138-a79fa8d47b82" />
<img width="3358" height="2302" alt="AI alphabet page" src="https://github.com/user-attachments/assets/18555060-bbbf-4164-a21b-655e64f80b6e" />
<img width="3358" height="2302" alt="Alphabet carrd page" src="https://github.com/user-attachments/assets/46c74347-ad60-4aa0-8c2b-e8faa2219f0b" />

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


### Data
All A–Z data (letter, word, definition, activity) lives in **`script.js`** as `AI_ALPHABET`.  
Edit in one place and both `learn.html` and `alphabet.html` reflect changes.

### How the pages work

- `learn.html` finds `.alphabet-grid` and **auto‑renders** the 26 tiles on `DOMContentLoaded`.
- Clicking a tile navigates to `alphabet.html?letter=Q`.
- `alphabet.html` reads the `?letter` parameter and displays the detail card, with **Previous/Next** navigation and a progress bar.

### Reporting Issues

1. Please use Github's Issues to report issues and bugs.

---

## Roadmap

- Simple progress badges for learners (localStorage)
- Add quiz mini‑games in Quiz section (match, drag‑and‑drop)
- Illustrations for each letter 
