import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-shell border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <SectionHeading eyebrow="02 / Experience" title="Building products that earn their place." />
      <div className="ml-2 border-l border-zinc-300 dark:border-zinc-700 md:ml-[calc(25%+0.5rem)]">
        {portfolio.experience.map((item, index) => (
          <article key={item.company} className="group relative grid gap-4 border-b border-zinc-200 py-10 pl-8 last:border-0 dark:border-zinc-800 md:grid-cols-[0.7fr_1.5fr] md:gap-10 md:pl-12">
            <span className="absolute -left-[5px] top-12 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent ring-4 ring-accent/10 dark:border-zinc-950" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">{item.period}</p>
              <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.company}</p>
            </div>
            <div>
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-accent dark:text-white">{item.role}</h3>
                <span className="font-mono text-xs text-zinc-300 dark:text-zinc-700">0{index + 1}</span>
              </div>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">{item.summary}</p>
              <ul className="mt-5 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
