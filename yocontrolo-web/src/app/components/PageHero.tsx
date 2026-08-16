import type { LucideIcon } from 'lucide-react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export default function PageHero({ eyebrow, title, description, icon: Icon }: PageHeroProps) {
  return <section className="yc-page-hero">
    <span className="yc-eyebrow">{Icon && <Icon />}{eyebrow}</span>
    <h1>{title}</h1>
    <p>{description}</p>
  </section>;
}
