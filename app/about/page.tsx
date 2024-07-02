import TechItem from "@/components/tech-item";
import { TimeCircuit } from "@/components/time-circuit";

export default function About() {
  const codingStartDate = new Date("2014-08-01");
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between gap-20 items-center">
          <div className="flex justify-center items-center">
            <TimeCircuit time={codingStartDate} fontClass="text-5xl" />
          </div>
          <p className="text-xl lg:text-left text-center">
            2014?? How did we end up here? Well as it turns out, this was the
            day that I wrote my first ever batch script that deleted the windows
            system32, and it marked the beginning of one of the most embarrasing
            phases in my life: &apos;The hacker phase&apos;(*sigh*). Fun fact,
            this was also the day that I first watched{" "}
            <a
              className="underline decoration-red-500 hover:translate-y-1"
              href="https://i.pinimg.com/originals/23/cf/16/23cf16f5613d7050e9f79c4288d4a12d.gif"
            >
              Back to the future!
            </a>{" "}
            However, this led me to develop an interest for coding, free and
            open source software which obviously led to me using linux as my
            daily driver.
          </p>
          <hr className="border border-t-white w-32 opacity-20" />
          <p className="text-xl lg:text-left text-center">
            Cut to 10 years later, I&apos;ve finished college with a computer
            science degree, a master&apos;s degree in data science and I picked
            up NLP as my main profession. Currently, I build AI based
            applications (RAGs, agentic frameworks) and finetune models whenever
            I get the chance to.
            <a
              className="underline decoration-red-500 hover:translate-y-1"
              href="mailto:sriram.vadlamani@proton.me"
            >
              shoot me an email
            </a>{" "}
            if you want me on board.
          </p>
          <hr className="border border-t-white w-32 opacity-20" />
          <div className="flex flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <h3 className="text-sky-600 text-3xl">My tech stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <TechItem altName="Go" logoPath="/icons/go.png" />
                <TechItem altName="Python" logoPath="/icons/python.png" />
                <TechItem altName="NextJS" logoPath="/icons/nextjs.png" />
                <TechItem altName="React" logoPath="/icons/react.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
