import { Language } from "./project-card";

export interface LanguageBadgeProps {
  languages: Language[];
}

const colorClassMap = new Map<string, string>();
colorClassMap.set(
  "red",
  "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
);
colorClassMap.set(
  "blue",
  "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
);
colorClassMap.set(
  "yellow",
  "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
);
colorClassMap.set(
  "green",
  "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
);

export function LanguageBadge({ languages }: LanguageBadgeProps) {
  return languages.map((_item, _index) => {
    let currentClassNames = colorClassMap.get(_item.color);
    return (
      <span key={_index} className={currentClassNames}>
        {_item.name}
      </span>
    );
  });
}
