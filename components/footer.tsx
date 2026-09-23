import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="page-shell py-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a href="#home" className="font-signature text-3xl text-zinc-950 dark:text-white">{portfolio.person.displayName}</a>
            <p className="mt-2 text-sm text-zinc-500">Designed with care. Built with Next.js.</p>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-zinc-200 pt-5 text-xs text-zinc-500 dark:border-zinc-800 sm:flex-row">
          <p>© {new Date().getFullYear()} {portfolio.person.name}. All rights reserved.</p>
          <a href="#home" className="transition hover:text-accent">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
