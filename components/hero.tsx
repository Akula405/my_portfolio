import { portfolio } from "@/data/portfolio";
import { Icon } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image";

export function Hero() {
  const { person } = portfolio;

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden border-b border-zinc-200 pt-24 dark:border-zinc-800">
      <div className="hero-grid absolute inset-0 -z-10 opacity-60 dark:opacity-25" />
      <div className="pointer-events-none absolute -right-20 top-32 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="page-shell w-full py-20 md:py-28">
        <div className="max-w-5xl">
          <div className="animate-rise flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
              {person.availability}
            </p>
          </div>

          <div className="mt-8 grid items-center gap-10 sm:grid-cols-[1fr_0.7fr] lg:gap-20">
          <h1 className="animate-rise text-[clamp(3.5rem,10vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-zinc-950 [animation-delay:80ms] dark:text-white">
            {person.name.split(" ")[0]}
            <br />
            <span className="text-zinc-400 dark:text-zinc-600">{person.name.split(" ").slice(1).join(" ")}.</span>
          </h1>
          <div className="w-full max-w-[280px] animate-rise rounded-[2rem] border border-zinc-300 bg-white p-2 [animation-delay:160ms] dark:border-zinc-700 dark:bg-zinc-900 sm:justify-self-end lg:max-w-[320px]">
            <Image src={person.imageUrl} alt={person.imageAlt} width={480} height={560} priority className="aspect-[6/7] w-full rounded-[1.5rem] object-cover" />
          </div>
          </div>

          <div className="mt-10 grid animate-rise gap-8 [animation-delay:160ms] md:grid-cols-[1fr_1.15fr] md:items-end">
            <p className="font-mono text-sm uppercase tracking-[0.16em] text-accent">
              {person.role}
            </p>
            <div>
              <p className="max-w-2xl text-xl leading-relaxed tracking-tight text-zinc-700 dark:text-zinc-300 sm:text-2xl">
                {person.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={person.resumeUrl} className="button-primary" download>
                  Résumé <Icon name="download" className="h-4 w-4" />
                </a>
                <a href="#contact" className="button-secondary">
                  Let&apos;s talk <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex animate-rise flex-wrap items-center justify-between gap-6 border-t border-zinc-200 pt-6 [animation-delay:240ms] dark:border-zinc-800">
          <SocialLinks />
          <p className="text-sm text-zinc-500">{person.location}</p>
        </div>
      </div>
    </section>
  );
}
