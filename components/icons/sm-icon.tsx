import Image from "next/image";

export interface SocialMediaProps {
  svgPath?: string | undefined;
  name: string;
  link: string;
}

export function SocialMediaIcon({ svgPath, name, link }: SocialMediaProps) {
  return (
    <a href={link} className="hover:scale-125 transition-all">
      <Image
        src={svgPath ? svgPath : "/icons/default_tech.png"}
        alt={name}
        width={30}
        height={30}
      />
    </a>
  );
}
