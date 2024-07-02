import { Language } from "@/components/project-card";

const LanguageColorMap = new Map<string, Language>();
LanguageColorMap.set("go", { name: "Go", color: "blue" });
LanguageColorMap.set("python", { name: "Python", color: "yellow" });
LanguageColorMap.set("ts", { name: "TypeScript", color: "red" });
LanguageColorMap.set("htmx", { name: "HTMX", color: "green" });

export function GetLanguageColorMap(tag: string) {
  return LanguageColorMap.get(tag)!;
}
