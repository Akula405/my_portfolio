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

All social icons are clickable. LinkedIn and email use personal destinations. GitHub, X, Instagram, YouTube, and project GitHub links currently open the platform homepages, labelled as such; replace these URLs with your profiles/repositories when available. The Netflix GPT and Recipe App live demos are active; the remaining two cards are reserved for upcoming projects.

Skills are organized into eight editable cards. CI/CD currently lists the version-control and build tools from the resume; add specific pipeline tools when appropriate.

The displayed name is `person.displayName` (currently `Satish Akula`), styled with locally hosted Dancing Script. Headings use locally hosted Space Grotesk. The skills ticker pauses on hover, has a pause/resume button, and becomes a static wrapping list when reduced motion is enabled.

## Contact email setup

The existing React client form uses `@formspree/react` with form ID `mgavygep` and submits to `https://formspree.io/f/mgavygep`. No API keys, Resend configuration, or custom backend are required. The form ID is public by design.

Manage the recipient inbox, allowed domains, spam protection, and notification settings in your Formspree dashboard. Confirm the recipient email there and check that your deployed domain is allowed if you enable domain restrictions. Changing `person.email` only changes the direct email link; it does not change Formspree's configured recipient.

The form sends Name, Email, and Message, plus Formspree's hidden `_gotcha` honeypot field. It retains native required-field and email validation, accessible provider validation feedback, a disabled loading button, and the existing toast styling. Success appears only after Formspree accepts the submission and resets the fields. Failed submissions keep the message for retry and offer a direct email link. The standard POST action also provides a no-JavaScript fallback.

Reference: [Formspree React integration](https://github.com/formspree/formspree-js/tree/master/packages/formspree-react).

To check end-to-end delivery, submit a message through the site and confirm it in both the Formspree submissions dashboard and your recipient inbox. Build and lint checks do not verify external email delivery.

## Commands

```bash
npm run dev
npm run lint
npm run build
```
