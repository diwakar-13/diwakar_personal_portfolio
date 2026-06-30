import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SpinningText } from "@/components/ui/spinning-text";
import AnimatedText from "./_components/AnimatedText";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center overflow-x-hidden justify-between z-0 lg:p-30 md:p-20 p-6 pt-10 lg:pt-0 bg-light dark:bg-dark dark:text-light text-dark w-full min-h-screen gap-8 lg:gap-0">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          src={"/diwakarPublic.png"}
          alt="public profile image"
          height={500}
          width={500}
          className="w-full md:max-w-[750px] lg:max-w-full    h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left self-center">
        <AnimatedText
          text="Turning Vision Into Reality With Code And Design."
          className="!text-5xl md: lg:!text-6xl !text-center lg:!text-left font-bold"
        />
        <p className="text-sm md:text-md lg:text-base text-center lg:text-left  my-4 font-medium max-w-xl">
          I’m a Full Stack Developer passionate about building modern web
          applications and exploring Generative AI. I enjoy turning ideas into
          real products, solving meaningful problems, and creating digital
          experiences that make an impact.
        </p>
        <div className="flex items-center self-center lg:self-start mt-2 gap-4">
          <Link href="/resume.pdf" target="_blank" download={true}>
            <InteractiveHoverButton className="border-black dark:border-light">
              Resume
            </InteractiveHoverButton>
          </Link>

          <Link
            href="mailto:diwakarpandey410@gmail.com"
            target="_blank"
            className="relative inline-block group py-2"
          >
            Email me
            <span className="absolute bg-dark dark:bg-light h-[1px] bottom-1 left-0 w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>

      {/* UI EXACT SAME HAI (wahi -top-4 right-0). Bas z-index badha diya hai taaki koi dusra element isko block na kare */}
      {/* UI CLASSES BILKUL SAME HAIN (-top-4 right-0 w-36 h-36 etc.). Bas inline style se zIndex ko high kiya hai taaki Header isko block na kar paye */}
      {/* UI EXACT SAME HAI: Bas 'hidden lg:flex' kiya hai taaki mobile par duplicate na ho aur bade screen par niche sahi dikhe */}
      <div className="hidden lg:flex absolute lg:left-4 lg:bottom-4 items-center justify-center lg:w-48 lg:h-48 z-[99999] pointer-events-none">
        <SpinningText
          radius={6}
          duration={20}
          className="lg:text-[18px] font-medium select-none pointer-events-none"
        >
          • Full Stack Developer • Gen AI Enthusiast
        </SpinningText>

        <div className="absolute flex items-center justify-center lg:w-20 lg:h-20 rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black hover:border dark:bg-light dark:text-dark dark:hover:bg-dark cursor-pointer dark:hover:text-light hover:border-gray-500 transition-all duration-300 pointer-events-auto group">
          <Link
            href="mailto:diwakarpandey410@gmail.com"
            className="w-full h-full flex items-center justify-center rounded-full cursor-pointer relative z-[100001]"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* light bulb */}
      <div className="hidden md:block absolute right-5 md:-bottom-135 lg:bottom-0 w-28">
        <Image
          src="/lightbulb.svg"
          alt="public profile image"
          height={200}
          width={200}
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
