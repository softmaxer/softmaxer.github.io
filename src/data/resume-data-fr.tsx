import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA_FR = {
  name: "Sriram Vadlamani",
  initials: "SRV",
  location: "Lyon, France, CET",
  locationLink: "https://www.google.com/maps/place/Lyon",
  about:
    "Ingénieur Full Stack et éducateur soucieux du détail, dédié à la création de produits de haute qualité et à la formation des futurs talents de la tech.",
  summary: (
    <>
      Ingénieur spécialisé dans la conception de systèmes et le backend, avec une expertise en infrastructure, intégrations et applications d'IA générative telles que les agents vocaux, les chatbots et les RAGs conçus pour le secteur de la santé. Expérimenté en conception d'architecture technique et en leadership d'équipes à distance.
      <br />
      <p className="italic font-bold">
        Actuellement ouvert à l'enseignement du développement logiciel, de la conception de systèmes et d'autres cours connexes ou de l'anglais.
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
      school: "Openclassrooms (avec Centrale Supélec)",
      degree: "Master en Data Science",
      start: "2022",
      end: "2023",
    },
    {
      school: "EPITA",
      degree: "Licence en Informatique",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Vocca",
      link: "https://vocca.ai",
      type: ["Freelance"],
      badges: ["Python", "Infrastructure Réseau/Système", "Shell", "Cron"],
      title: "Ingénieur Déploiement Avancé",
      logo: ConsultlyLogo,
      start: "Jan 2025",
      end: null,
      description: (
        <>
          Développement et déploiement d'agents vocaux GenAI, intégration d'API et d'infrastructures. Gestion de VPN et conception de middleware pour des interactions fluides avec des codes tiers.
        </>
      ),
    },
    {
      company: "Analysisly",
      link: "",
      type: ["Freelance"],
      badges: ["Azure", "Python", "Groq"],
      title: "Ingénieur IA Principal",
      logo: ParabolLogo,
      start: "Juil 2024",
      end: "Sept 2024",
      description: (
        <>
          Développement de feuilles de route GenAI pour l'extraction d'informations et l'automatisation. Architecture de solutions de transcription audio, aidant au financement de pré-amorçage. Structuration des transcriptions textuelles en ontologies.
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
      title: "Ingénieur NLP → Développeur Full Stack",
      logo: ClevertechLogo,
      start: "Nov 2023",
      end: "Juin 2024",
      description: (
        <>
          Analyse des retours patients à l'aide de modèles NLP avancés pour générer des résumés d'avis. Traitement des données médicales pour extraire les codes clés et évaluation des performances de l'IA. Déploiement de solutions IA sur Azure, intégration d'interfaces utilisateur et maintenance des dépôts de code.
        </>
      ),
    },
    {
      company: "Raccourci Agency",
      link: "",
      type: ["Permanent"],
      badges: ["Python", "Pytorch", "Kotlin", "Javascript"],
      title: "Ingénieur NLP",
      logo: JojoMobileLogo,
      start: "Juil 2022",
      end: "Nov 2023",
      description: (
        <>
          Analyse des avis utilisateurs à l'aide de modèles NLP avancés pour l'analyse de sujets et de sentiments. Implémentation de CI/CD pour le déploiement de modèles et affinage de modèles pour des tâches en langue française, en optimisant pour la classification d'entités.
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
    "Architecture Système",
    "Python",
    "Systèmes de Base de Données",
    "REST/gRPC",
    "Azure",
    "PySpark sur Databricks",
  ],
  projects: [
    {
      title: "Pedal AI",
      techStack: ["React", "Python"],
      description: "Un prototype d'éditeur audio basé sur l'IA.",
      logo: MonitoLogo,
      link: {
        label: "Github",
        href: "https://github.com/softmaxer/PedalAI",
      },
    },
    {
      title: "Ollamanet",
      techStack: ["Go"],
      description: "Un répartiteur de charge pour l'inférence LLM concurrente.",
      logo: MonitoLogo,
      link: {
        label: "Github",
        href: "https://github.com/softmaxer/ollamanet",
      },
    },
    {
      title: "Envy",
      techStack: ["Go"],
      description: "Un petit outil CLI pour chiffrer et gérer les fichiers .env",
      logo: ConsultlyLogo,
      link: {
        label: "Github",
        href: "https://github.com/softmaxer/envy",
      },
    },
  ],
} as const;
