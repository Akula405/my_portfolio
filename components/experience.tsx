import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-shell border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <SectionHeading eyebrow="Experience" title="Building, learning, evolving." intro="Different teams, different challenges. A shared focus on making complex products easier to use." />
      <div className="space-y-4">
        {portfolio.experience.map((item, index) => (
          <details key={item.company} name="experience" open={index === 0} className="experience-card group rounded-2xl border border-zinc-200 bg-paper transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-[#0b0b0b] dark:hover:border-zinc-600">
            <summary className="relative grid cursor-pointer list-none grid-cols-1 gap-4 rounded-2xl p-6 pr-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_0.7fr_1fr] lg:gap-6">
              {[["Company", item.company], ["Role", item.role], ["Location", item.location], ["Duration", item.period]].map(([label, value]) => <span key={label}><span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-zinc-500">{label}</span><span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{value}</span></span>)}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="absolute right-5 top-7 h-5 w-5 text-accent transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <div className="border-t border-zinc-200 px-6 pb-7 pt-6 dark:border-zinc-800 sm:px-8">
              <p className="max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400">{item.summary}</p>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Technologies used</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{item.technologies.map(tech => <li key={tech} className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">{tech}</li>)}</ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
