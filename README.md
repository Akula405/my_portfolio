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

The form posts to `/api/contact`, which sends through [Resend](https://resend.com/docs/api-reference/emails/send-email). API credentials are only read on the server.

1. Copy `.env.example` to `.env.local`.
2. Set `RESEND_API_KEY` to your Resend sending key.
3. Set `CONTACT_FROM_EMAIL` to a sender on your verified Resend domain, such as `Satish Portfolio <contact@your-domain.com>`.
4. Keep `CONTACT_TO_EMAIL=akulasatish405@gmail.com`, or set another inbox.
5. Restart the development server. For deployment, set the same variables in your hosting environment and redeploy.

Never prefix these secrets with `NEXT_PUBLIC_` or commit `.env.local`. The Resend test sender can only deliver within your account's testing restrictions; use a verified sender for production.

The form shows a dismissible success toast after Resend accepts the message. Missing configuration, validation failures, provider rejections, and network failures show a friendly email-fallback toast without clearing the visitor's message or claiming it was sent. Success notifications close after eight seconds; fallback notifications remain until dismissed. Reply-To is set to the visitor's address; the recipient is controlled by the server. Resend acceptance does not confirm inbox delivery.

The endpoint includes input and body-size limits, an origin check, and a honeypot. Configure hosting-level rate limiting or bot protection before public deployment; these checks alone are not a distributed rate limiter.

Run `npm run test:contact` to verify validation, payload construction, configuration handling, and provider/network failures using a mock provider. These tests do not send emails. A real delivery test requires your configured Resend credentials.

## Commands

```bash
npm run dev
npm run lint
npm run test:contact
npm run build
```
