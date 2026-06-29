import Image from "next/image";
import Education from "./_components/Education";
import AnimatedText from "@/app/_components/AnimatedText";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
export const metadata = {
  title: "About | Diwakar Pandey",
  description: "About Diwakar Pandey portfolio",
};

export default function Page() {
  return (
    <main className="flex w-full p-32 pt-16 flex-col items-center justify-center">
      <AnimatedText text="Building Products With Purpose." className="mb-16" />

      <div className="grid w-full grid-cols-8 gap-16">
        {/* Biography */}
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase dark:text-light text-dark/75">
            Biography
          </h2>

          <p className="font-medium">
            Hi, I'm{" "}
            <span className="font-bold text-xl dark:text-light text-dark">
              Diwakar Pandey
            </span>
            , a Full Stack Developer passionate about building modern web
            applications, exploring Generative AI, and turning ideas into
            meaningful digital products.
          </p>

          <p className="my-4 font-medium">
            I enjoy creating scalable applications, learning new technologies,
            and solving real-world problems through software.
          </p>

          <p className="font-medium">
            I enjoy transforming complex ideas into simple, user-friendly
            solutions. Whether it's a web application, an AI-powered product, or
            a startup concept, my goal is to build technology that creates real
            value and meaningful impact.
          </p>
        </div>

        {/* Image */}
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:bg-dark dark:border-light bg-light p-8">
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />

          <Image
            src="/developer-pic-2.jpg"
            alt="Diwakar Pandey"
            width={500}
            height={500}
            className="h-auto w-full rounded-2xl"
            preload
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>

        {/* Education */}
        <div className="col-span-2 flex flex-col items-end justify-center">
          <Education />
        </div>
      </div>

      <Skills />
      <Experience />
    </main>
  );
}
