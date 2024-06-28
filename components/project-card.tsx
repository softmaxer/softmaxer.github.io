"use client";
import Image from "next/image";
import ProfileButton from "./buttons/profile-button";

export interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  image?: string | undefined;
}
export default function ProjectCard({
  name,
  description,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4 hover:scale-125 transition-all border border-white border-opacity-20 hover:bg-gray-950 rounded-lg md:w-full lg:w-full justify-center">
      <Image
        src={image ? image : "/cards/default.png"}
        alt={name}
        width={70}
        height={70}
        className="rounded-full"
      />
      <p className="font-bold text-sm text-sky-600 text-center">{name}</p>
      <p className="text-sm text-center">{description}</p>
      <ProfileButton action="Code" path={link} />
    </div>
  );
}
