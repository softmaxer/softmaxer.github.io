"use client";
import { GetMonthFromNumber } from "@/lib/month";
import React from "react";

export interface TimeCircuitProps {
  time?: Date | undefined;
}

export function TimeCircuit({ time }: TimeCircuitProps) {
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
    <div className="flex flex-row border p-1 border-white rounded-md">
      <span className="text-red-500 font-digital">{day}</span>
      <span
        className={visible ? "visible font-digital" : "invisible font-digital"}
      >
        :
      </span>
      <span className="text-red-500 font-digital">
        {GetMonthFromNumber(month)}
      </span>
      <span
        className={visible ? "visible font-digital" : "invisible font-digital"}
      >
        :
      </span>
      <span className="text-red-500 font-digital">{year}</span>
    </div>
  );
}
