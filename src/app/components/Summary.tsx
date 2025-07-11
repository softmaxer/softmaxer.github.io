"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: React.ReactNode;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  const { language } = useLanguage();
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        {language === "en" ? "About" : "À propos"}
      </h2>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
