import { useState } from "react";
import "./TechFilter.css";

export interface TechCount {
  name: string;
  count: number;
}

interface TechFilterProps {
  languages: TechCount[];
  tools: TechCount[];
  active: string[];
  onChange: (tech: string[]) => void;
}

// Chips for every language and tool used across the projects. Select as many as you like: the sections
// show the projects that use any of them. Selecting a chip again deselects it, and "All projects" clears.
// On wide screens it floats over the left of the page and can be folded away to a "Filter" button.
export function TechFilter({ languages, tools, active, onChange }: TechFilterProps) {
  // Open from the start only where the page's gutter is wide enough that it covers no cards.
  const [open, setOpen] = useState(() => window.innerWidth >= 1760);

  const toggle = (name: string) =>
    onChange(active.includes(name) ? active.filter((t) => t !== name) : [...active, name]);

  const row = (label: string, items: TechCount[]) => (
    <div className="TechFilterRow">
      <span className="TechFilterLabel">{label}</span>
      <div className="TechFilterChips">
        {items.map(({ name, count }) => (
          <button key={name} type="button" aria-pressed={active.includes(name)} onClick={() => toggle(name)}>
            {name}
            <span>{count}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`TechFilterFloat${open ? "" : " is-collapsed"}`}>
      <div className="TechFilter" role="group" aria-labelledby="tech-filter-heading">
        <button
          type="button"
          className="TechFilterToggle"
          aria-expanded={open}
          aria-controls="tech-filter-body"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide filter" : "Filter"}
          {!open && active.length > 0 && <span>{active.length}</span>}
        </button>
        <div className="TechFilterBody" id="tech-filter-body">
          <h2 className="TechFilterHeading" id="tech-filter-heading">
            Filter by the language or tool you're interested in
          </h2>
          <button
            type="button"
            className="TechFilterAll"
            aria-pressed={active.length === 0}
            onClick={() => onChange([])}
          >
            All projects
          </button>
          {row("Languages", languages)}
          {row("Tools", tools)}
        </div>
      </div>
    </div>
  );
}
