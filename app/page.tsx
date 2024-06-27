import ProfileButton from "@/components/buttons/profile-button";
import SocialMediaTray from "@/components/media-tray";
import Image from "next/image";
import delorean from "../public/icons/raulxav-Car-delorean.svg";
import { TimeCircuit } from "@/components/time-circuit";
import { TimeTravel } from "@/components/time-travel";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-start gap-14">
      <div className="flex flex-col">
        <p>
          Hey <span>👋</span>! My name is
        </p>
        <p className="text-7xl lg:text-left text-sky-600 text-center font-bold">
          Sriram Vadlamani
        </p>
        <p>I&apos;m an</p>
        <div className="flex flex-row justify-between">
          <p className="text-xl lg:text-left text-sky-600 text-center italic">
            AI engineer / developer
          </p>
          <SocialMediaTray />
        </div>
      </div>
      <div className="flex flex-row  gap-32 items-center justify-evenly">
        <ProfileButton action="Check out my projects" path="/projects" />
        <ProfileButton action="Download my CV" path="/cv.pdf" />
        <ProfileButton
          action="Hire me"
          path="mailto:sriram.vadlamani@proton.me"
        />
      </div>
      <div className="flex flex-col">
        <p>Or if you&apos;re feeling adventurous, you can</p>
        <a
          className="font-bttf text-xl hover:scale-125 transition-all"
          href="#"
        >
          {"<"} time travel
        </a>
      </div>
    </div>
  );
}
