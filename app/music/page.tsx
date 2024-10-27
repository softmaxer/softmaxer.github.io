"use client";
import ComingSoon from "@/components/coming-soon";
import PricingSection from "@/components/pricing";
import { useIsVisible } from "@/hooks/element-boundary";
import React from "react";

export default function MusicHome() {
  const latestReleaseRef = React.useRef<HTMLDivElement>(null);
  const latestReleaseIsVisible = useIsVisible(latestReleaseRef);

  const comingSoonRef = React.useRef<HTMLDivElement>(null);
  const comingSoonIsVisible = useIsVisible(comingSoonRef);
  return (
    <div className="flex flex-col justify-start items-start p-12 md:p-24 lg:p-24 gap-12">
      <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start w-full gap-12 font-solanelRegular">
        <div
          ref={latestReleaseRef}
          className={`flex flex-col w-full ${latestReleaseIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-500`}
        >
          <p className="text-2xl">Latest release </p>
          <iframe
            style={{ borderRadius: "12px", border: "0px" }}
            src="https://open.spotify.com/embed/track/3t4IkHfT4eXZggkupi4SUe?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div
          ref={comingSoonRef}
          className={`flex flex-col w-full ${comingSoonIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-700`}
        >
          <p className="text-2xl">Coming soon</p>
          <ComingSoon artistName="RAM" songName="When's tomorrow" />
        </div>
      </div>
      <PricingSection />
      <button
        className="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Contact
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 ml-1.5"
        >
          <path
            fill-rule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
