# Atharva Sanganwar — Developer Portfolio

A responsive terminal-inspired portfolio built with React, Vite, Tailwind-free custom CSS, Framer Motion and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Important: add your resume

Copy your resume PDF into the `public` folder and name it exactly:

`resume.pdf`

The "view_resume.pdf" link will then work.

## Before publishing

- Check your email, phone, LinkedIn and GitHub links in `src/App.jsx`.
- Replace the project GitHub links with the individual repository URLs when available.
- Update project descriptions if implementation details change.
- The portfolio currently uses your resume information; no unsupported awards or metrics have been added.

## Build for deployment

```bash
npm run build
```

Deploy the generated `dist` folder to Vercel or Netlify. For Vercel, import the Git repository and use the default Vite settings.
