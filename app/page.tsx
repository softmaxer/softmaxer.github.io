"use client";
import ProfileButton from "@/components/buttons/profile-button";
import { useIsVisible } from "@/hooks/element-boundary";
import Image from "next/image";
import React from "react";

export default function Home() {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const titleIsVisible = useIsVisible(titleRef);

  const taglineRef = React.useRef<HTMLParagraphElement>(null);
  const taglineIsVisible = useIsVisible(taglineRef);
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start p-24 md:p-32 lg:p-44 gap-14">
      <div
        ref={titleRef}
        className={`flex flex-col gap-5 justify-start items-start ${titleIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-300`}
      >
        <Image
          src={"/profile_pic.png"}
          width={300}
          height={300}
          alt="profile_pic"
          className="rounded-3xl"
        />
        <p className="text-7xl md:text-7xl lg:text-9xl text-left font-solanelBold">
          Sriram
        </p>
        <p className="text-2xl md:text-4xl lg:text-4xl text-left opacity-40 font-solanelBold">
          AI engineer / developer
        </p>
      </div>
      <div
        ref={taglineRef}
        className={`${taglineIsVisible ? "opacity-70" : "opacity-0"} ease-in duration-1000 font-solanelLight flex flex-col justify-start items-end gap-12 md:gap-24 lg:gap-16`}
      >
        <p className={`text-right text-2xl md:text-2xl lg:text-4xl`}>
          I&apos;m a Data Scientist based in Paris, France. I speacialize in NLP
          and Generative AI applications.
          <br />I provide architecture, build models, and deploy them.
          <br />I also enjoy building web apps in my free time.
        </p>

        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3 justify-end items-end">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Email address
            </dt>
            <dd className="text-lg font-semibold">
              sriram.vadlamani@proton.me
            </dd>
          </div>
          <div className="flex flex-col pt-3 justify-end items-end">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Phone number
            </dt>
            <dd className="text-lg font-semibold">+33 7 55 31 20 13</dd>
          </div>
        </dl>

        <div className="flex flex-col justify-end rounded-md p-2  gap-5 font-solanelRegular">
          <ProfileButton action="Work experience" path="/work" />
          <ProfileButton
            action="Contact me"
            path="mailto:sriram.vadlamani@proton.me"
          />
        </div>
      </div>
    </div>
  );
}
