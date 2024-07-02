"use client";
import { GetMonthFromNumber } from "@/lib/month";
import React from "react";

export interface TimeCircuitProps {
  time?: Date | undefined;
  fontClass: string;
}

export function TimeCircuit({ time, fontClass }: TimeCircuitProps) {
  const [visible, setVisible] = React.useState<boolean>(false);
  let timeToSet = new Date();
  if (time) {
    timeToSet = time;
  }
  const month = timeToSet.getMonth();
  const day = timeToSet.getDate();
  const year = timeToSet.getFullYear();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisible(!visible);
    }, 500);

    return () => clearInterval(timer);
  });

  return (
    <div className="flex flex-row">
      <span className={`text-red-500 font-digital ${fontClass}`}>{day}</span>
      <span
        className={
          visible
            ? `visible font-digital ${fontClass}`
            : `invisible font-digital ${fontClass}`
        }
      >
        :
      </span>
      <span className={`text-red-500 font-digital ${fontClass}`}>
        {GetMonthFromNumber(month)}
      </span>
      <span
        className={
          visible
            ? `visible font-digital ${fontClass}`
            : `invisible font-digital ${fontClass}`
        }
      >
        :
      </span>
      <span className={`text-red-500 font-digital ${fontClass}`}>{year}</span>
    </div>
  );
}
