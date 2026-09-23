import { portfolio } from "@/data/portfolio";
import { Icon } from "@/components/icons";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {portfolio.socials.map((social) => (
        <a key={social.label} href={social.href} target={social.platform === "email" ? undefined : "_blank"} rel={social.platform === "email" ? undefined : "noreferrer"} aria-label={social.label} title={social.label} className="social-link">
          <Icon name={social.platform} className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
