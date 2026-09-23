import { portfolio } from "@/data/portfolio";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const accentClasses = {
  coral: "bg-[#ffddd4] dark:bg-[#3a1812]",
  blue: "bg-[#dce8f8] dark:bg-[#101f33]",
  violet: "bg-[#e8dff4] dark:bg-[#251831]",
  green: "bg-[#dae9dc] dark:bg-[#14271a]",
};

export function Projects() {
  return (
    <section id="projects" className="section-shell border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <SectionHeading eyebrow="Projects" title="Ideas turned into interfaces." intro="Explore my movie and recipe discovery projects, with more work to share soon." />
      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article key={project.title} className="project-card group">
            <div className={`relative aspect-[16/10] overflow-hidden rounded-xl ${accentClasses[project.accent]}`}>
              <span className="absolute left-5 top-5 font-mono text-xs tracking-widest text-zinc-600 dark:text-zinc-400">{project.liveUrl ? "SELECTED PROJECT" : "COMING SOON"}</span>
              <div className="absolute inset-x-8 bottom-0 top-16 translate-y-8 rounded-t-xl border border-black/10 bg-white/80 p-4 shadow-soft transition-transform duration-500 group-hover:translate-y-5 dark:border-white/10 dark:bg-zinc-900/90">
                <div className="flex gap-1.5 border-b border-zinc-200 pb-3 dark:border-zinc-700">
                  <span className="h-2 w-2 rounded-full bg-accent"/><span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"/><span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"/>
                </div>
                <div className="mt-5 grid grid-cols-[0.55fr_1fr] gap-4">
                  <div className="space-y-2"><div className="h-2 w-16 rounded bg-zinc-300 dark:bg-zinc-700"/><div className="h-2 w-10 rounded bg-zinc-200 dark:bg-zinc-800"/></div>
                  <div className="grid grid-cols-2 gap-2"><div className="h-16 rounded-md bg-zinc-100 dark:bg-zinc-800"/><div className="h-16 rounded-md bg-zinc-100 dark:bg-zinc-800"/><div className="col-span-2 h-10 rounded-md bg-zinc-100 dark:bg-zinc-800"/></div>
                </div>
              </div>
            </div>
            <div className="pt-7">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="font-mono text-xs text-zinc-500">#{tag.replaceAll(" ", "-")}</span>)}
              </div>
              <div className="mt-7 flex gap-5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link" aria-label={`Live demo: ${project.title}`}>Live demo <Icon name="external" className="h-4 w-4" /></a> : <button type="button" disabled className="inline-flex cursor-default items-center gap-1.5 text-sm font-semibold text-zinc-400 dark:text-zinc-600">Live demo <Icon name="external" className="h-4 w-4" /></button>}
                <a href={project.githubUrl} target="_blank" rel="noreferrer" title="GitHub homepage — repository link coming soon" aria-label="Visit GitHub homepage (repository link coming soon)" className="project-link">GitHub <Icon name="github" className="h-4 w-4" /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
