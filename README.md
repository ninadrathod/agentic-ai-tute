# Agentic AI in CI/CD — Beginner Tutorial

A single-page, self-contained HTML tutorial covering Agentic AI concepts in a CI/CD context. Includes 100 interactive multiple-choice questions with detailed explanations.

## What's included

| File | Purpose |
|------|---------|
| `index.html` | Tutorial content, layout, and Tailwind styling |
| `script.js` | Navigation, mobile menu, quiz rendering, and progress tracking |
| `assets/diagrams/*.png` | Ten section diagrams (rendered PNG images, visible everywhere) |
| `assets/diagrams/*.svg` | Editable SVG sources used to generate the PNGs |
| `CNAME` | Custom domain for GitHub Pages (optional) |
| `README.md` | This deployment guide |

## Local preview

No build step is required. Open `index.html` in a browser, or serve the folder locally:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (if npx is available)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Hosting on GitHub Pages

This repository is currently **private**. GitHub Pages visibility rules depend on your account plan:

| Repository visibility | GitHub Free | GitHub Pro / Team / Enterprise |
|----------------------|-------------|--------------------------------|
| **Public** repo | Pages available (free) | Pages available |
| **Private** repo | Pages **not** available on Free | Pages available (Pro+) |

### Option A — Make the repository public (recommended for a free tutorial site)

A public tutorial site is usually the right choice: no secrets in these files, easy sharing, and GitHub Pages works on the free plan.

1. **Review the repo for secrets**  
   Confirm there are no API keys, `.env` files, or credentials. This project should only contain HTML, JS, README, and CNAME.

2. **Change visibility to Public**  
   - Open the repo on GitHub → **Settings** → **General**  
   - Scroll to **Danger Zone** → **Change repository visibility** → **Make public**  
   - Type the repository name to confirm.

3. **Enable GitHub Pages**  
   - **Settings** → **Pages**  
   - **Source:** Deploy from a branch  
   - **Branch:** `main` (or your default branch) → folder **`/ (root)`** → **Save**  
   - Wait 1–3 minutes. Your site will be at:  
     `https://<your-username>.github.io/<repo-name>/`

4. **Optional — custom domain**  
   - Edit `CNAME` and replace `www.yourcustomdomain.com` with your real domain.  
   - In your DNS provider, add a **CNAME** record pointing to `<your-username>.github.io`.  
   - Back in **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** once DNS propagates.

5. **Verify**  
   Open the Pages URL, test desktop sidebar navigation, mobile menu, and a few quiz accordions.

### Option B — Keep the repository private (requires GitHub Pro or higher)

If you must keep the repo private:

1. Upgrade to **GitHub Pro** (or use an org plan that includes private Pages).  
2. Follow the same **Settings → Pages** steps as above.  
3. The site URL is the same format, but only people with repo access can see the *repository*; the **published Pages site itself is still publicly reachable** unless you use access controls available on higher-tier plans.

> **Note:** On most plans, a GitHub Pages site deployed from a private repo is still a **public website** by default. Do not put confidential content in the published files.

### Option C — Deploy without changing repo visibility

Alternatives if you cannot use GitHub Pages:

- **Netlify / Vercel / Cloudflare Pages** — connect the private GitHub repo and deploy the root folder (no build command needed).  
- **Manual upload** — zip the files and upload to any static host.

---

## Updating the tutorial

1. Edit `index.html` (content) or `script.js` (quizzes / interactivity).  
2. Commit and push to the branch configured for Pages.  
3. Changes usually appear within a minute or two.

## Editing diagrams

The tutorial displays **PNG images** (universally visible in browsers and on GitHub Pages). Source SVGs live alongside them in `assets/diagrams/`.

To edit a diagram:

1. Modify the matching `*.svg` file (e.g. `01-learning-roadmap.svg`).
2. Regenerate PNGs:

```bash
npm install
npm run build:diagrams
```

3. Commit both the updated SVG and PNG files.

## License

Adapt and share freely for learning purposes.
