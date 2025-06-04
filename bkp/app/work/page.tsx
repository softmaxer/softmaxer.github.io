"use client";
import PreferredTechStack from "@/components/pref-stack";
import Projects from "@/components/projects";
import WorkItem from "@/components/work-item";
import React from "react";

export default function WorkExp() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start p-24 md:p-32 lg:p-44 gap-12 md:gap-24 lg:gap-52">
      <div className="flex flex-col">
        <WorkItem
          position="Principal AI engineer"
          companyName="Analysisly"
          contractType="Freelance"
          startDate="July 2024"
          endDate="September 2024"
          description={[
            "Drafted a scalable cloud architecture of LLM inference on voice transcriptions and implemented an MVP for the same",
            "Contributed to the pitch deck for a seed funding round.",
          ]}
        />
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <WorkItem
          position="NLP engineer"
          companyName="Ryte"
          contractType="Permanent"
          startDate="November 2023"
          endDate="June 2024"
          description={[
            "Built a chatbot using a Retrieval Augmented Generation (RAG) workflow with a Databricks backend and an interface in React. ",
            "Helped organize code repositories and managed Pull Requests",
          ]}
        />
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <WorkItem
          position="NLP engineer"
          companyName="Raccourci Agency"
          contractType="Permanent"
          startDate="July 2022"
          endDate="October 2023"
          description={[
            "Fine-tuned BERT models for enhanced lanugage performance with french user reviews",
            "Deployed and monitored above models using various CI/CD pipelines",
            "Built an MVP for a sustainable tourism dashboard",
          ]}
        />
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <WorkItem
          position="Data Analyst"
          contractType="Mid-school Internship"
          companyName="FutureSwift technologies"
          startDate="June 2019"
          endDate="September 2019"
          description={[
            "Gathered and cleaned data.",
            "Made a dashboard with newly engineered features",
          ]}
        />
      </div>
      <div className="flex flex-col gap-14">
        <p className="text-4xl text-left opacity-75 font-solanelBold">
          My preferred tech stack for building a SaaS:
        </p>
        <div className="flex justify-center">
          <PreferredTechStack />
        </div>
        <p className="text-4xl text-left opacity-75 font-solanelBold">
          My personal projects:
        </p>
        <Projects />
      </div>
    </div>
  );
}
