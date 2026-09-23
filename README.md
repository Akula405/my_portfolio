# Developer Portfolio

A modern single-page developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Customize the content

All names, profile copy, navigation, experience, skills, projects, and social links live in [`data/portfolio.ts`](data/portfolio.ts). Replace those values without changing the section components.

The resume button downloads the original `public/satish_resume_UI.pdf`. Replace that file or update `person.resumeUrl` when your resume changes.

The hero uses a local profile placeholder. Add your photo to `public/`, then update `person.imageUrl` and `person.imageAlt` in `data/portfolio.ts`.

LinkedIn and email are active. Social entries with `href: null` display inactive icons. The Netflix GPT and Recipe App live demos are active; the remaining two cards are reserved for upcoming projects. GitHub project buttons are intentionally inactive.

Skills are organized into eight editable cards. CI/CD currently lists the version-control and build tools from the resume; add specific pipeline tools when appropriate.

## Commands

```bash
npm run dev
npm run lint
npm run build
```
