import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SpinningText } from "@/components/ui/spinning-text";
import AnimatedText from "./_components/AnimatedText";

export default function Home() {
  return (
    <main className="flex items-center z-0 p-30 pt-0 bg-light text-dark w-full min-h-screen">
      <Image
        src={"/diwakarPublic.png"}
        alt="public profile image"
        height={500}
        width={500}
        className="w-1/2 h-auto "
      />
      <div className="w-1/2 flex flex-col items-center self-center">
        <AnimatedText 
          text="Turning Vision Into Reality With Code And Design."
          className="!text-6xl !text-left"
        />
        <p className="text-base my-4 font-medium">
          I’m a Full Stack Developer passionate about building modern web
          applications and exploring Generative AI. I enjoy turning ideas into
          real products, solving meaningful problems, and creating digital
          experiences that make an impact.
        </p>
        <div className="flex items-center self-start mt-2 gap-4">
          <Link href="/resume.pdf" target="_blank" download={true}>
            <InteractiveHoverButton className="border-black">
              Resume
            </InteractiveHoverButton>
          </Link>
          <Link href="mailto:diwakarpandey410@gmail.com" target={"_blank"}>
            Contact Me
          </Link>
        </div>
      </div>

      {/* spinning text */}
      <div className="absolute left-4 bottom-4 flex items-center justify-center w-48 h-48">
        <SpinningText radius={7} duration={20} className="text-md font-bold">
          • Full Stack Developer • Gen AI Enthusiast
        </SpinningText>

        <div className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black hover:border-1 hover:border-gray-500 transition-all duration-300">
          <Link href="mailto:diwakarpandey410@gmail.com">Hire Me</Link>
        </div>
      </div>

      {/* light bulb */}
      <div className="absolute right-8 bottom-4 w-30">
        <Image
          src="/lightbulb.svg"
          alt="public profile image"
          height={200}
          width={200}
        />
      </div>
    </main>
  );
}
