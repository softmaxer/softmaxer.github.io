import ProfileButton from "@/components/buttons/profile-button";
import SocialMediaTray from "@/components/media-tray";
import { Typewriter } from "nextjs-simple-typewriter";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
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
        <div className="flex flex-row gap-4">
          <span className="font-digital text-xl">CURRENT STATUS:</span>
          <span className="font-digital text-xl text-yellow-500">
            <Typewriter
              words={["OPEN TO WORK", "Looking for opportunities"]}
              loop={-1}
              deleteSpeed={20}
              typeSpeed={30}
            />
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10 border border-red-500 rounded-md border-opacity-30 p-5">
        <ProfileButton action="Check out my projects" path="/projects" />
        <ProfileButton action="Download my CV" path="/cv.pdf" />
        <ProfileButton
          action="Hire me"
          path="mailto:sriram.vadlamani@proton.me"
        />
      </div>
      <hr className="border border-t-white w-32 opacity-20" />
      <div className="flex flex-row gap-1.5">
        <p>Or if you&apos;re feeling adventurous, you can</p>
        <a
          className="font-bttf text-xl hover:scale-125 hover:text-red-500 transition-all"
          href="/about"
        >
          {"<"} time travel
        </a>
      </div>
    </div>
  );
}
