"use client";

import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { useLanguage } from "@/context/LanguageContext";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const { language, setLanguage, translations } = useLanguage();

  const metadata: Metadata = {
    title: `${translations.name} - Resume`,
    description: translations.about,
    openGraph: {
      title: `${translations.name} - Resume`,
      description: translations.about,
      type: "profile",
      locale: language === "en" ? "en_US" : "fr_FR",
      images: [
        {
          url: "https://cv.jarocki.me/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${translations.name}'s profile picture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${translations.name} - Resume`,
      description: translations.about,
      images: ["https://cv.jarocki.me/opengraph-image"],
    },
  };

  function getCommandMenuLinks() {
    const links = [];

    if (translations.personalWebsiteUrl) {
      links.push({
        url: translations.personalWebsiteUrl,
        title: "Personal Website",
      });
    }

    return [
      ...links,
      ...translations.contact.social.map((socialMediaLink) => ({
        url: socialMediaLink.url,
        title: socialMediaLink.name,
      })),
    ];
  }

  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <div className="flex justify-start gap-2 mb-4 print:hidden">
        <Button
          variant={language === "en" ? "default" : "outline"}
          onClick={() => setLanguage("en")}
        >
          EN
        </Button>
        <Button
          variant={language === "fr" ? "default" : "outline"}
          onClick={() => setLanguage("fr")}
        >
          FR
        </Button>
      </div>
      <div className="sr-only">
        <h1>{translations.name}&apos;s Resume</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-2 flex flex-col">
          <Summary summary={translations.summary} />

          <div className="print:gap-14 space-y-8 print:space-y-2 print:flex print:flex-row print:items-start print:justify-between">
            <WorkExperience work={translations.work} />

            <div className="flex flex-col gap-10 print:gap-4">
              <Education education={translations.education} />
              <Skills skills={translations.skills} />
              <Projects projects={translations.projects} />
            </div>
          </div>
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
