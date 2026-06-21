import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedText from "./_components/AnimatedText";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Home() {
  return (
    <main className="flex items-center z-0 p-30 pt-0 bg-light text-dark w-full min-h-screen">
      <Image
        src={"/developer-pic-1.png"}
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
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex items-center self-start mt-2 gap-4">
          <Link href="/resume.pdf" target="_blank" download={true}>
            <InteractiveHoverButton className="border-black">
              Resume
            </InteractiveHoverButton>
          </Link>
          <Link href="mailto:diwakarpandey410@gmail.com" target={"_blank"}>
            contact
          </Link>
        </div>
      </div>
    </main>
  );
}
