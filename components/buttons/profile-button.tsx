import React from "react";

export interface ProfileProps {
  action: string;
  path: string;
}

export default function ProfileButton({ action, path }: ProfileProps) {
  return (
    <p className="font-solanelLight hover:scale-125 transition-all text-right hover:translate-x-14 text-2xl">
      <a
        href={path}
        className="inline-flex items-center font-medium hover:opacity-35 transition-all"
      >
        {action}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </a>
    </p>
  );
}
