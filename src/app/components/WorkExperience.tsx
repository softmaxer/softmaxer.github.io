"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

type WorkExperience = {
  company: string;
  link: string;
  type: readonly string[];
  badges: readonly string[];
  title: string;
  logo: React.ElementType;
  start: string;
  end: string | null;
  description: React.ReactNode;
};

type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
  badgeColor: string;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges, badgeColor }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className={cn(
              "align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight",
              badgeColor
            )}
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  const { language } = useLanguage();
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Employment period: ${start} to ${
        end ?? (language === "en" ? "Present" : "Aujourd'hui")
      }`}
    >
      {start} - {end ?? (language === "en" ? "Present" : "Aujourd'hui")}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, type, badges, title, start, end, description } = work;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={type}
              badgeColor="bg-blue-300"
            />
          </h3>
          <WorkPeriod start={start} end={end} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px] underline">
          {title}
        </h4>

        <BadgeList
          className="hidden gap-x-1 sm:inline-flex"
          badges={badges}
          badgeColor="bg-gray-300"
        />
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-pretty text-xs text-foreground/80 print:mt-1 print:text-[10px]">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
            badgeColor="bg-blue-300"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: WorkExperience[];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  const { language } = useLanguage();
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        {language === "en" ? "Work Experience" : "Expérience Professionnelle"}
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
