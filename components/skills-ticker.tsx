"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

export function SkillsTicker() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="mt-12 border-y border-zinc-200 py-4 dark:border-zinc-800">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="eyebrow">My working toolkit</p>
        <button type="button" className="ticker-control rounded-full px-3 py-1 text-xs text-zinc-600 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Resume skills ticker" : "Pause skills ticker"}>{paused ? "Resume" : "Pause"}</button>
      </div>
      <p className="sr-only">{portfolio.tickerSkills.join(", ")}</p>
      <div className="ticker-viewport overflow-hidden" aria-hidden="true">
        <div className="ticker-track flex w-max" style={{ animationPlayState: paused ? "paused" : undefined }}>
          {[0, 1].map(copy => <div key={copy} className="ticker-copy flex shrink-0 items-center">
            {portfolio.tickerSkills.map(skill => <span key={skill} className="flex items-center gap-7 pr-7 text-lg font-medium tracking-tight text-zinc-700 dark:text-zinc-300"><span>{skill}</span><span className="text-xs text-accent">✦</span></span>)}
          </div>)}
        </div>
      </div>
    </div>
  );
}
