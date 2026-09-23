"use client";

import { FormEvent, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Icon } from "@/components/icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">05 / Contact</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-zinc-950 dark:text-white sm:text-6xl">
            Contact me
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Have a question or just want to say hello? Send me a message. I’d love to hear from you.
          </p>
          <a href={`mailto:${portfolio.person.email}`} className="mt-8 inline-flex items-center gap-2 border-b border-zinc-950 pb-1 text-sm font-semibold text-zinc-950 transition hover:border-accent hover:text-accent dark:border-white dark:text-white">
            {portfolio.person.email} <Icon name="arrow" className="h-4 w-4" />
          </a>
          <div className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <p><a href={portfolio.person.phoneUrl} className="transition hover:text-accent">{portfolio.person.phone}</a></p>
            <p>{portfolio.person.location}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="form-label">
              Name
              <input name="name" type="text" className="form-input" placeholder="Your name" required />
            </label>
            <label className="form-label">
              Email
              <input name="email" type="email" className="form-input" placeholder="you@example.com" required />
            </label>
          </div>
          <label className="form-label mt-6">
            Message
            <textarea name="message" className="form-input min-h-32 resize-y" placeholder="Your message..." required />
          </label>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-zinc-500">I’ll get back to you within 2–3 business days.</p>
            <button type="submit" className="button-primary">Send message <Icon name="arrow" className="h-4 w-4" /></button>
          </div>
          <p className={`mt-5 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 ${sent ? "block" : "hidden"}`} role="status">
            Thanks! This demo form is ready to connect to your preferred form service.
          </p>
        </form>
      </div>
    </section>
  );
}
