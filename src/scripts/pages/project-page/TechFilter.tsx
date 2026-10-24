import "./TechFilter.css";

export interface TechCount {
  name: string;
  count: number;
}

interface TechFilterProps {
  languages: TechCount[];
  tools: TechCount[];
  active: string | null;
  onChange: (tech: string | null) => void;
}

// Chips for every language and tool used across the projects; selecting one narrows both sections to the
// projects that use it, and selecting it again (or "All projects") clears the filter.
export function TechFilter({ languages, tools, active, onChange }: TechFilterProps) {
  const row = (label: string, items: TechCount[]) => (
    <div className="TechFilterRow">
      <span className="TechFilterLabel">{label}</span>
      <div className="TechFilterChips">
        {items.map(({ name, count }) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === name}
            onClick={() => onChange(active === name ? null : name)}
          >
            {name}
            <span>{count}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="TechFilter" role="group" aria-label="Filter projects by language or tool">
      <button
        type="button"
        className="TechFilterAll"
        aria-pressed={active === null}
        onClick={() => onChange(null)}
      >
        All projects
      </button>
      {row("Languages", languages)}
      {row("Tools", tools)}
    </div>
  );
}
