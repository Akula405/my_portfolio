import { portfolio } from "@/data/portfolio";
import { Icon } from "@/components/icons";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {portfolio.socials.map((social) => social.href ? (
        <a key={social.label} href={social.href} target={social.platform === "email" ? undefined : "_blank"} rel={social.platform === "email" ? undefined : "noreferrer"} aria-label={social.label} className="social-link">
          <Icon name={social.platform} className="h-[18px] w-[18px]" />
        </a>
      ) : (
        <button key={social.label} type="button" disabled aria-label={`${social.label} (link unavailable)`} className="grid h-10 w-10 cursor-default place-items-center rounded-full border border-zinc-200 text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
          <Icon name={social.platform} className="h-[18px] w-[18px]" />
        </button>
      ))}
    </div>
  );
}
