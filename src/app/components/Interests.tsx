import { Section } from "@/components/ui/section";

export interface InterestsProps {
  interests: string[];
}

export default function HobbiesAndInterests({ interests }: InterestsProps) {
  return (
    <Section>
      <div className="flex flex-col gap-4 print:gap-2">
        <ul>
          <li>{interests[0]}</li>
        </ul>
      </div>
    </Section>
  );
}
