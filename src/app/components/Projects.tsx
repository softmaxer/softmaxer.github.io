"use client";

import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { useLanguage } from "@/context/LanguageContext";

type Project = {
  title: string;
  techStack: readonly string[];
  description: string;
  logo: React.ElementType;
  link?: {
    label: string;
    href: string;
  };
};

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active project indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card
      className="h-full print:flex print:flex-col overflow-hidden border print:border-none p-3"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1 print:space-y-0">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[9px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex print:hidden">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: readonly Project[];
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects }: ProjectsProps) {
  const { language } = useLanguage();
  return (
    <Section className="scroll-mb-16 print:space-y-4 print:pt-12">
      <div className="mt-4">
        <h2 className="text-xl font-bold" id="languages">
          {language === "en" ? "Languages" : "Langues"}
        </h2>
        <div
          className="grid grid-cols-4 gap-2 mt-2"
          role="feed"
          aria-labelledby="languages"
        >
          <Badge
            className="text-black print:text-[10px] bg-blue-400"
            aria-label={`Skill: English`}
          >
            {language === "en" ? "English" : "Anglais"}
          </Badge>
          <Badge
            className="text-black print:text-[10px] bg-blue-400"
            aria-label={`Skill: French`}
          >
            {language === "en" ? "French" : "Français"}
          </Badge>

          <Badge
            className="text-black print:text-[10px] bg-blue-400"
            aria-label={`Skill: Hindi`}
          >
            Hindi
          </Badge>

          <Badge
            className="text-black print:text-[10px] bg-blue-400"
            aria-label={`Skill: Telugu`}
          >
            Telugu
          </Badge>
        </div>
      </div>
    </Section>
  );
}
