import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  const { person } = portfolio;

  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Curious by nature. Precise by practice."
        intro="I care about the small details—the ones that make software feel obvious, fast, and quietly dependable."
      />
      <div className="grid gap-10 border-t border-zinc-200 pt-10 dark:border-zinc-800 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-900">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_49%,rgba(255,92,53,0.18)_49%,rgba(255,92,53,0.18)_51%,transparent_51%)]" />
          <div className="absolute left-8 top-8 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Engineer<br />&amp; maker</div>
          <div className="absolute bottom-7 right-7 text-[7rem] font-semibold leading-none tracking-[-0.09em] text-zinc-300 dark:text-zinc-800">{person.initials}</div>
          <div className="absolute bottom-8 left-8 h-3 w-3 rounded-full bg-accent" />
        </div>
        <div>
          <p className="text-2xl leading-relaxed tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-3xl">
            {person.about}
          </p>
          <p className="mt-6 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            {person.aboutMore}
          </p>
          <div className="mt-8 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <p className="eyebrow">Education</p>
            <h3 className="mt-3 font-semibold text-zinc-950 dark:text-white">{portfolio.education.degree}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{portfolio.education.institution}</p>
            <p className="mt-1 text-xs text-zinc-500">{portfolio.education.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
