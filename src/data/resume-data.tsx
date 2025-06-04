import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sriram Vadlamani",
  initials: "SRV",
  location: "Lyon, France, CET",
  locationLink: "https://www.google.com/maps/place/Lyon",
  about:
    "Detail-oriented Full Stack Engineer and Educator dedicated to building high-quality products and nurturing future tech talent.",
  summary: (
    <>
      Systems design and backend focused engineer specializing in
      infrastructure, integrations and Generative AI applications such as voice
      agents, chatbots and RAGs built for healthcare. Experienced in technical
      architecture design and remote team leadership.
      <br />
      <p className="italic font-bold">
        Currently open to teaching software development, systems design and
        other related courses.
      </p>
    </>
  ),
  avatarUrl:
    "https://dam.malt.com/c6b20fe4-1729-405d-bf7b-5be4b4006134?gravity=face&func=face&face_margin=60&w=360&h=360&q=90",
  personalWebsiteUrl: "",
  contact: {
    email: "sriram.vadlamani@proton.me",
    tel: "+33755312013",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/softmaxer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sriram-vadlamani",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Openclassrooms (with Centrale Supélec)",
      degree: "Masters degree in Data Science",
      start: "2022",
      end: "2023",
    },
    {
      school: "EPITA",
      degree: "Bachelor's Degree in Computer Science",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Vocca",
      link: "https://vocca.ai",
      type: ["Freelance"],
      badges: ["Python", "Network/Sys Infrastructure", "Shell", "Cron"],
      title: "Forward Deployed Engineer",
      logo: ConsultlyLogo,
      start: "Jan 2025",
      end: null,
      description: (
        <>
          Developed and deployed GenAI voice agents, integrating APIs and
          infrastructure. Managed VPNs and designed middleware for seamless
          third-party code interactions.
        </>
      ),
    },
    {
      company: "Analysisly",
      link: "",
      type: ["Freelance"],
      badges: ["Azure", "Python", "Groq"],
      title: "Principal AI Engineer",
      logo: ParabolLogo,
      start: "Jul 2024",
      end: "Sept 2024",
      description: (
        <>
          Developed GenAI roadmaps for information extraction and automation.
          Architected audio transcription solutions, aiding in pre-seed funding.
          Structured text transcriptions into ontologies.
        </>
      ),
    },
    {
      company: "Ryte",
      link: "",
      type: ["Permanent"],
      badges: [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Databricks",
        "Azure",
      ],
      title: "NLP engineer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "Nov 2023",
      end: "June 2024",
      description: (
        <>
          Analyzed patient feedback using advanced NLP models to generate review
          summaries. Processed medical data to extract key codes and evaluated
          AI performance. Deployed AI solutions on Azure, integrated user
          interfaces, and maintained code repositories.
        </>
      ),
    },
    {
      company: "Raccourci Agency",
      link: "",
      type: ["Permanent"],
      badges: ["Python", "Pytorch", "Kotlin", "Javascript"],
      title: "NLP Engineer",
      logo: JojoMobileLogo,
      start: "Jul 2022",
      end: "Nov 2023",
      description: (
        <>
          Analyzed user reviews using advanced NLP models for topic and
          sentiment analysis. Implemented CI/CD for model deployment and
          fine-tuned models for French language tasks, optimizing for entity
          classification.
        </>
      ),
    },
  ],
  skills: [
    "Next.js",
    "TypeScript",
    "Go",
    "Tailwind",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "System Architecture",
    "Python",
    "Database systems",
    "REST/gRPC",
    "Azure",
    "PySpark on Databricks",
  ],
  projects: [
    {
      title: "Pedal AI",
      techStack: ["React", "Python"],
      description: "A prototype for an AI based audio editor.",
      logo: MonitoLogo,
      link: {
        label: "Github",
        href: "https://github.com/softmaxer/PedalAI",
      },
    },
    {
      title: "Ollamanet",
      techStack: ["Go"],
      description: "A Load balancer for concurrent LLM inference.",
      logo: MonitoLogo,
      link: {
        label: "Github",
        href: "https://github.com/softmaxer/ollamanet",
      },
    },
    {
      title: "Envy",
      techStack: ["Go"],
      description: "A small CLI tool to encrypt and manage .env files",
      logo: ConsultlyLogo,
      link: {
        label: "Github",
        href: "https://github.com/softmaxer/envy",
      },
    },
  ],
} as const;
