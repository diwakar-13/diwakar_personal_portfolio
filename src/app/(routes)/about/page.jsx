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
    // FIX: added 'max-w-full overflow-x-hidden' to prevent entire page horizontal scaling/cutoffs
    <main className="flex w-full max-w-full overflow-x-hidden p-4 pt-10 mobile-md:p-6 md:p-12 sm:p-8 lg:p-32 lg:pt-16 flex-col items-center justify-center dark:text-light">
      <AnimatedText
        text="Building Products With Purpose."
        className="mb-10 !text-4xl sm:!text-6xl md:!text-7xl lg:!text-8xl !leading-tight !text-center"
      />

      {/* Grid columns handle rules as-is */}
      <div className="grid w-full grid-cols-8 gap-10 sm:gap-8 items-start">
        {/* Biography Block */}
        <div className="col-span-8 md:col-span-4 lg:col-span-3 flex flex-col items-start justify-start order-2 md:order-none px-2 sm:px-0">
          <h2 className="mb-4 text-base md:text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Biography
          </h2>

          <p className="font-medium text-sm md:text-base">
            Hi, I'm{" "}
            <span className="font-bold text-xl dark:text-light text-dark">
              Diwakar Pandey
            </span>
            , a Full Stack Developer passionate about building modern web
            applications, exploring Generative AI, and turning ideas into
            meaningful digital products.{" "}
          </p>

          <p className="my-4 font-medium text-sm md:text-base">
            I enjoy creating scalable applications, learning new technologies,
            and solving real-world problems through software.
          </p>

          <p className="font-medium text-sm md:text-base">
            I enjoy transforming complex ideas into simple, user-friendly
            solutions. Whether it's a web application, an AI-powered product, or
            a startup concept, my goal is to build technology that creates real
            value and meaningful impact.
          </p>
        </div>

        {/* Image Frame Card */}
        <div className="relative col-span-8 md:col-span-4 lg:col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 md:p-8 dark:border-light dark:bg-dark max-w-md mx-auto lg:max-w-full w-[calc(100%-16px)] sm:w-full order-1 md:order-none">
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />

          <Image
            src="/developer-pic-2.jpg"
            alt="Diwakar Pandey"
            width={500}
            height={500}
            className="h-auto w-full rounded-2xl "
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Education Box */}
        <div className="col-span-8 md:col-span-8 lg:col-span-2 lg:self-stretch h-full flex flex-col items-center md:items-stretch lg:items-end justify-center w-full order-3 md:order-none mt-4 lg:mt-0 px-2 sm:px-0">
          <div className="w-full h-full flex flex-col">
            <Education className="h-full w-full" />{" "}
          </div>
        </div>
      </div>

      <Skills />
      <Experience />
    </main>
  );
}