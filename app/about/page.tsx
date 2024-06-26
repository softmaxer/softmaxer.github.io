import TechItem from "@/components/tech-item";
import { TimeCircuit } from "@/components/time-circuit";

export default function About() {
  const codingStartDate = new Date("2014-08-01");
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between gap-20">
          <TimeCircuit time={codingStartDate} />
          <p className="text-xl lg:text-left text-center">
            2014?? How did we end up here? Well as it turns out, this was the
            day that I wrote my first ever batch script that deleted the windows
            system32, and it marked the beginning of one of the most embarrasing
            phases in my life: 'The hacker phase' (*sigh*). However, this led me
            to develop an interest for coding and since then, I went to a
            computer science school and then once I graduated, I picked up data
            science and NLP as my main profession but the developer inside me
            always stayed.
          </p>
          <h1 className="text-sky-600 text-7xl text-center">About me</h1>
          <p className="text-xl lg:text-left text-center">
            I am an AI engineer / developper and I believe that good software
            should be simple and intuitive, both to develop and to use. I am
            here to help you with your next tech adventure, anything ranging
            from a portfolio to a SaaS application. My primary experience is in
            Natural language processing, backend services and cloud
            architectures. However, I am also pretty comfortable diving deep
            into the world of Javascript/Typescript and building websites (For
            example, this website was built using NextJS and Tailwind CSS). Feel
            free to{" "}
            <a
              className="underline decoration-orange-300 hover:translate-y-1"
              href="mailto:sriram.vadlamani@proton.me"
            >
              shoot me an email
            </a>{" "}
            if you want me on board!
          </p>
          <div className="flex flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <h3 className="text-sky-600 text-3xl">Languages I speak</h3>
              <div className="flex -space-x-0.5 rtl:space-x-reverse">
                <TechItem altName="Go" logoPath="/icons/go.png" />
                <TechItem altName="Python" logoPath="/icons/python.png" />
                <TechItem altName="C" logoPath="/icons/c.png" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sky-600 text-3xl">Frameworks I use</h3>
              <div className="flex -space-x-0.5 rtl:space-x-reverse">
                <TechItem altName="NextJS" logoPath="/icons/nextjs.png" />
                <TechItem altName="React" logoPath="/icons/react.png" />
                <TechItem altName="Pytorch" logoPath="/icons/pytorch.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
