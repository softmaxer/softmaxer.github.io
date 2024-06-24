import ProfileButton from "@/components/buttons/profile-button";
import SocialMediaTray from "@/components/media-tray";
import Image from "next/image";
import delorean from "../public/icons/raulxav-Car-delorean.svg";
import { TimeCircuit } from "@/components/time-circuit";
import { TimeTravel } from "@/components/time-travel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <p>
          Hey <span>👋</span>! My name is
        </p>
        <p className="text-7xl lg:text-left text-sky-600 text-center">
          Sriram Vadlamani
        </p>
      </div>
      <TimeTravel />
      <div className="flex flex-row  gap-32 items-center justify-evenly">
        <ProfileButton action="Download CV" path="/cv.pdf" />
        <ProfileButton
          action="Hire me"
          path="mailto:sriram.vadlamani@proton.me"
        />
      </div>
    </>
  );
}
