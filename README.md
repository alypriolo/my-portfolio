# Alessandra Priolo — Portfolio

A clean, modern product-manager portfolio built with **Vite + React**. Includes Hero, About, Case Studies, Skills, and Contact sections.

---

## Setup: Resume PDF

Copy your resume PDF into the `public/` folder so it can be served:

```bash
cp portfolio-content/Priolo_Alessandra_Resume.pdf public/Priolo_Alessandra_Resume.pdf
```

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deploy to GitHub Pages

### One-time setup

1. **Create a GitHub repository** (e.g. `my-portfolio`).

2. **Update `vite.config.js`** — set `base` to match your repo name:
   ```js
   base: '/my-portfolio/',   // must match your GitHub repo name exactly
   ```

3. **Add `homepage` to `package.json`** (optional, but good practice):
   ```json
   "homepage": "https://alypriolo.github.io/my-portfolio"
   ```

4. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/alypriolo/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Deploy

```bash
npm run deploy
```

This runs `vite build` (outputs to `dist/`) and then pushes it to the `gh-pages` branch using the `gh-pages` package.

### Enable GitHub Pages

1. Go to your repo on GitHub → **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select branch: `gh-pages` / root
4. Save — your site will be live at:
   ```
   https://alypriolo.github.io/my-portfolio
   ```

> **Note:** It may take 1–2 minutes for the site to appear after the first deploy.

---

## Project Structure

```
my-portfolio/
├── public/
│   └── favicon.svg
├── portfolio-content/       ← your original Notion export + resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx   / .css
│   │   ├── About.jsx  / .css
│   │   ├── CaseStudies.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Customization

| What to change | Where |
|---|---|
| Your name / tagline | `src/components/Hero.jsx` |
| About Me text | `src/components/About.jsx` |
| Case study cards | `src/components/CaseStudies.jsx` |
| Skills list | `src/components/Skills.jsx` |
| Contact info | `src/components/Contact.jsx` |
| Resume PDF link | `src/components/Navbar.jsx` + `Hero.jsx` |
| Color palette | `src/index.css` (CSS variables at top) |

---

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI framework
- [gh-pages](https://github.com/tschaub/gh-pages) — GitHub Pages deployment
- Google Fonts (Inter + Sora) — typography
- Vanilla CSS with custom properties — no CSS framework needed
