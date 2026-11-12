# Abi-Portfolio
React + Vite + Framer Motion + React Three Fiber portfolio. All content lives in `src/data.js`.

## Run locally
```bash
npm install
cp .env.example .env   # optional, enables the contact form
npm run dev
```

## Contact form (Formspree)
Create a form at formspree.io, put its ID in `.env` as `VITE_FORMSPREE_ID`. Without it the form shows an honest "not configured" message and never fakes success.

## Before publishing
- `src/data.js`: add a live/GitHub link to a project when it exists (buttons only appear for real links).

## Deploy to Netlify
1. Push to GitHub. 2. Netlify → Add new site → Import from Git. 3. Build command `npm run build`, publish dir `dist` (already in `netlify.toml`). 4. Add `VITE_FORMSPREE_ID` under Site settings → Environment variables, then redeploy.

## Troubleshooting a blank page
Do not open `index.html` by double-clicking it. Run `npm run dev` and open the http://localhost:5173 link, or `npm run build && npm run preview`. If it is still blank, press F12 → Console and check the red error.
