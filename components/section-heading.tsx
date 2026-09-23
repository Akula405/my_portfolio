type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-5 md:mb-16 md:grid-cols-[1.4fr_1fr] md:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {intro ? (
        <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 md:justify-self-end">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
