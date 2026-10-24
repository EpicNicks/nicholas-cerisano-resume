import type { ReactNode } from "react";
import "./ProjectDetail.css";

export interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectDetailProps {
  title: string;
  subtitle: string;
  /** A headline result, e.g. ["+15%", "cases resolved per week"]. */
  metric?: [string, string];
  /** A screenshot, clip, game or demo shown above the write-up. */
  media?: ReactNode;
  /** The write-up: usually a few <p>s. */
  children?: ReactNode;
  /** Heading for the skimmable list, e.g. "Key Contributions". */
  pointsHeading?: string;
  /** Each point is a bold label with an optional line of detail. */
  points?: [string, string?][];
  tech?: string[];
  links?: ProjectLink[];
  /** Anything that comes after everything else, e.g. a nested card grid. */
  footer?: ReactNode;
}

// The layout every open project card shares: title and subtitle, the headline result, media,
// the write-up, a skimmable list of key points, the stack and links.
export function ProjectDetail({
  title,
  subtitle,
  metric,
  media,
  children,
  pointsHeading,
  points,
  tech,
  links,
  footer,
}: ProjectDetailProps) {
  return (
    <article className="ProjectDetail">
      <h2 className="ProjectDetailTitle">{title}</h2>
      <p className="ProjectDetailSubtitle">{subtitle}</p>
      {metric && (
        <div className="ProjectDetailMetric">
          <b>{metric[0]}</b>
          {metric[1]}
        </div>
      )}
      {media && <div className="ProjectDetailMedia">{media}</div>}
      {children && <div className="ProjectDetailBody">{children}</div>}
      {points && points.length > 0 && (
        <section className="ProjectDetailPoints">
          {pointsHeading && <h3>{pointsHeading}</h3>}
          <ul>
            {points.map(([label, detail]) => (
              <li key={label}>
                <strong>{label}</strong>
                {detail && <span>{detail}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
      {tech && tech.length > 0 && (
        <ul className="ProjectDetailTech" aria-label="Built with">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      {links && links.length > 0 && (
        <div className="ProjectDetailLinks">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      )}
      {footer}
    </article>
  );
}
