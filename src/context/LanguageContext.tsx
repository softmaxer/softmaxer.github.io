"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { RESUME_DATA_FR } from "@/data/resume-data-fr";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: typeof RESUME_DATA;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const translations = language === "en" ? RESUME_DATA : RESUME_DATA_FR;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
