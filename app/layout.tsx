import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/dancing-script";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolio.person.name} — ${portfolio.person.role}`,
  description: portfolio.person.intro,
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList.toggle('dark', dark);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
