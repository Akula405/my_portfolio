"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

function ThemeToggle() {
  function toggleTheme() {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    try { localStorage.setItem("theme", nextDark ? "dark" : "light"); } catch { /* Theme still works when storage is unavailable. */ }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
      aria-label="Toggle color theme"
    >
      <svg className="h-4 w-4 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      <svg className="hidden h-4 w-4 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>
      </svg>
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-paper/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#0b0b0b]/90">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <nav className="page-shell flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label={`${portfolio.person.name}, home`}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-zinc-950 text-xs font-semibold text-white transition group-hover:bg-accent dark:bg-white dark:text-zinc-950 dark:group-hover:bg-accent dark:group-hover:text-white">
            {portfolio.person.initials}
          </span>
          <span className="font-signature hidden text-2xl text-zinc-950 dark:text-white sm:block">
            {portfolio.person.displayName}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {portfolio.navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-1 h-px w-5 bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`absolute bottom-1 left-0 h-px w-5 bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" aria-hidden={!open} className={`overflow-hidden border-zinc-200 bg-paper transition-all duration-300 dark:border-zinc-800 dark:bg-[#0b0b0b] md:hidden ${open ? "max-h-96 border-t" : "max-h-0"}`}>
        <div className="page-shell flex flex-col py-5">
          {portfolio.navigation.map((item) => (
            <a key={item.href} href={item.href} tabIndex={open ? undefined : -1} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-zinc-200 py-3 text-sm font-medium transition hover:pl-2 hover:text-accent dark:border-zinc-800">
              {item.label}
              <span aria-hidden="true" className="text-accent">↗</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
