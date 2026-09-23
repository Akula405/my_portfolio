"use client";

import { FormEvent, useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Icon } from "@/components/icons";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [toast, setToast] = useState<"sent" | "email" | null>(null);

  useEffect(() => {
    if (toast !== "sent") return;
    const timer = setTimeout(() => setToast(null), 8000);
    return () => clearTimeout(timer);
  }, [toast]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setToast(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Your message could not be sent. Please try again.");
      setToast("sent");
      form.reset();
    } catch {
      setToast("email");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-zinc-950 dark:text-white sm:text-6xl">
            Let’s create something meaningful.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Have a question or just want to say hello? Send me a message. I’d love to hear from you.
          </p>
          <a href={`mailto:${portfolio.person.email}`} className="mt-8 inline-flex items-center gap-2 border-b border-zinc-950 pb-1 text-sm font-semibold text-zinc-950 transition hover:border-accent hover:text-accent dark:border-white dark:text-white">
            {portfolio.person.email} <Icon name="arrow" className="h-4 w-4" />
          </a>
          <div className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <p>{portfolio.person.location}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} aria-busy={status === "loading"} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
          <div className="hidden" aria-hidden="true">
            <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <fieldset disabled={status === "loading"}>
          <legend className="sr-only">Send me a message</legend>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="form-label">
              Name
              <input name="name" type="text" autoComplete="name" maxLength={100} className="form-input" placeholder="Your name" required />
            </label>
            <label className="form-label">
              Email
              <input name="email" type="email" autoComplete="email" maxLength={254} className="form-input" placeholder="you@example.com" required />
            </label>
          </div>
          <label className="form-label mt-6">
            Message
            <textarea name="message" maxLength={5000} className="form-input min-h-32 resize-y" placeholder="Your message..." required />
          </label>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <button type="submit" disabled={status === "loading"} className="button-primary">{status === "loading" ? "Sending…" : "Send message"} <Icon name="arrow" className="h-4 w-4" /></button>
          </div>
          </fieldset>
          <p className="sr-only" role="status" aria-live="polite">
            {status === "loading" ? "Sending your message…" : ""}
          </p>
        </form>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {toast && (
          <div role="status" className="fixed bottom-5 left-5 right-5 z-[60] flex animate-rise items-start gap-4 rounded-2xl border border-emerald-200 bg-white p-5 shadow-soft dark:border-emerald-900 dark:bg-zinc-900 sm:left-auto sm:w-[400px]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" aria-hidden="true">
              {toast === "sent" ? <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg> : <Icon name="email" />}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-zinc-950 dark:text-white">{toast === "sent" ? "Message sent successfully!" : "Thanks for reaching out!"}</p>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{toast === "sent" ? "Thank you for your message. I’m glad we could connect." : "Your message hasn’t been sent yet. You can email me directly, or try again."}</p>
              {toast === "email" && <a href={`mailto:${portfolio.person.email}`} className="mt-2 inline-block text-sm font-semibold text-emerald-700 underline underline-offset-4 dark:text-emerald-300">Email me directly</a>}
            </div>
            <button type="button" onClick={() => setToast(null)} aria-label="Dismiss notification" className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"><svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M6 18 18 6" /></svg></button>
          </div>
        )}
      </div>
    </section>
  );
}
