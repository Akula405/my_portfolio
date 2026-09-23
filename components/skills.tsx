import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading eyebrow="Skills" title="A toolkit for what’s next." intro="From polished frontend experiences to connected APIs and AI-assisted workflows, these are the tools and practices I bring to my work." />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {portfolio.skills.map((group) => (
          <article key={group.title} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-soft dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-accent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-7 flex items-center justify-between">
              <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-xl border border-accent/15 bg-accent/5 font-mono text-xl font-medium text-accent dark:bg-accent/10">{group.symbol}</span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">{group.title}</h3>
            <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{group.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-zinc-100 pt-5 dark:border-zinc-800">
              {group.items.map((skill) => <li key={skill} className="rounded-md border border-zinc-200 bg-paper px-2.5 py-1.5 text-xs font-medium leading-5 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
