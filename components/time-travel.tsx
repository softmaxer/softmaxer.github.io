import Image from "next/image";
import delorean from "../public/icons/raulxav-Car-delorean.svg";
import { TimeCircuit } from "./time-circuit";
export function TimeTravel() {
  return (
    <a
      className="flex flex-col gap-2 justify-center items-center hover:scale-125 transition-all"
      href="/about"
    >
      <Image src={delorean} alt="delorean" width={130} height={130} />
      <TimeCircuit fontClass="text-2xl" />
    </a>
  );
}
