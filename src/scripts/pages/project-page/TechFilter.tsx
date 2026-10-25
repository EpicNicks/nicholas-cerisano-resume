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
export function TechFilter({ languages, tools, active, onChange }: TechFilterProps) {
  const toggle = (name: string) =>
    onChange(active.includes(name) ? active.filter((t) => t !== name) : [...active, name]);

  const group = (label: string, items: TechCount[]) => (
    <div className="TechFilterGroup">
      <h3 className="TechFilterLabel">{label}</h3>
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
    <div className="TechFilter" role="group" aria-labelledby="tech-filter-heading">
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
      {group("Languages", languages)}
      {group("Tools", tools)}
    </div>
  );
}
