import ProjectCard from "@/components/project-card";
import { GetLanguageColorMap } from "@/lib/languages";

export default function Projects() {
  return (
    <div className="flex flex-col justify-between items-center gap-20">
      <h1 className="text-sky-600 text-7xl">My projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <ProjectCard
          name="Vulnerability database"
          description="Creating a data ingestion pipeline with semantic mapping from NVD to OSV"
          link="https://github.com/softmaxer/cve-database-ingestion"
          image="/cards/nvd.png"
          languagesUsed={[GetLanguageColorMap("go")]}
        />
        <ProjectCard
          name="OSAIL"
          description="A local leaderboard for evaluating LLMs"
          link="https://www.github.com/softmaxer/osail"
          image="/cards/osail.png"
          languagesUsed={[
            GetLanguageColorMap("go"),
            GetLanguageColorMap("htmx"),
          ]}
        />
        <ProjectCard
          name="Envy"
          description="A CLI tool to manage your .env files"
          link="https://www.github.com/softmaxer/envy"
          image="/cards/envy.png"
          languagesUsed={[GetLanguageColorMap("go")]}
        />
        <ProjectCard
          name="Pydantic serializer"
          description="A python decorator to serialize json strings into a pydantic model, with error handling"
          link="https://pypi.org/project/pydantic-serializer"
          image="/icons/python.png"
          languagesUsed={[GetLanguageColorMap("python")]}
        />
        <ProjectCard
          name="This website!"
          description="My portfolio, built with NextJS and Tailwind"
          link="https://github.com/softmaxer/softmaxer.github.io"
          image="/icons/profile_pic.png"
          languagesUsed={[GetLanguageColorMap("ts")]}
        />
        <ProjectCard
          name="Pedal"
          description="An AI driven audio editor for music and podcasts"
          link="https://github.com/HarmonicHackers/PedalAI"
          image="/cards/pedal.png"
          languagesUsed={[GetLanguageColorMap("python")]}
        />
        <ProjectCard
          name="Home credit"
          description="An MLOps gig to predict if a client can pay their loan back."
          link="https://github.com/softmaxer/openclassrooms-ds-p7"
          image="/cards/home-credit.jpg"
          languagesUsed={[GetLanguageColorMap("python")]}
        />
        <ProjectCard
          name="Fruits 360"
          description="Deploying an image feature extraction model on AWS with PySpark"
          link="https://github.com/softmaxer/fruits-360-cloud"
          image="/cards/fruits.png"
          languagesUsed={[GetLanguageColorMap("python")]}
        />
      </div>
    </div>
  );
}
