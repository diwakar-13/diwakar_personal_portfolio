"use client";

import AnimatedText from "@/app/_components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren" },
  },
};

const shadowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="w-[calc(100%-8px)] lg:w-[calc(100%-12px)] sm:w-full mx-auto flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid border-dark dark:border-light dark:bg-dark bg-light shadow-2xl p-6 sm:p-10 relative rounded-br-2xl gap-6 lg:gap-0"
    >
      <motion.div
        variants={shadowVariants}
        className="absolute top-0 -right-2 sm:-right-3 -z-10 h-[102%] sm:h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl dark:bg-light bg-dark"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-2xl"
      >
        <FramerImage
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          src={image}
          width={500}
          height={500}
          alt={title}
          className="w-full h-auto rounded-xl"
          priority={true}
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 lg:pl-6">
        <span className="text-pink-400 dark:text-primaryDark font-medium text-base sm:text-xl">
          {type}
        </span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl sm:text-4xl font-bold break-words">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-sm sm:text-base dark:text-light text-dark leading-relaxed">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-9 sm:w-10" target="_blank">
            <GithubIcon className="hover:scale-125 duration-300 ease-in active:scale-95" />
          </Link>
          <Link href={link} target="_blank" className="ml-4">
            <InteractiveHoverButton className="rounded-md dark:border-light border-dark border text-sm sm:text-base">
              Visit Project
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, image, link, github }) => {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="w-[calc(100%-8px)] lg:w-[calc(100%-12px)] sm:w-full mx-auto flex flex-col items-center justify-center rounded-2xl border border-solid dark:border-light dark:bg-dark border-dark bg-light p-4 sm:p-6 relative"
    >
      <motion.div
        variants={shadowVariants}
        className="absolute top-0 -right-2 sm:-right-3 -z-10 h-[103%] sm:h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl dark:bg-light bg-dark"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-2xl"
      >
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <FramerImage
            src={image}
            width={500}
            height={500}
            alt={title}
            className="w-full h-auto rounded-xl"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>
      </Link>
      <div className="w-full flex flex-col items-start justify-between pt-4">
        <span className="text-pink-400 dark:text-primaryDark font-medium text-sm sm:text-xl">
          {type}
        </span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-xl sm:text-3xl font-bold break-words">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="underline text-base sm:text-lg font-semibold"
          >
            Visit
          </Link>
          <Link href={github} className="w-7 sm:w-8" target="_blank">
            <GithubIcon className="hover:scale-125 ease-in duration-200 active:scale-95" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const page = () => {
  return (
    // FIX: Core structural heights are un-bounded. Removed 'block' and inner structural wraps to completely remove secondary vertical scroll tracking.
    <main className="flex w-full p-4 px-4 mb-20 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-10 lg:pt-16 flex-col items-center justify-center dark:text-light">
      <AnimatedText
        text="Imagination Trumps Knowledge!"
        className="mb-10 sm:mb-16 !text-4xl sm:!text-6xl lg:!text-7xl xl:!text-8xl !text-center !leading-tight"
      />

      <div className="grid grid-cols-12 gap-8 sm:gap-16 lg:gap-16 xl:gap-24 gap-y-16 sm:gap-y-32 max-w-[1400px] mx-auto w-full">
        <div className="col-span-12">
          <FeaturedProject
            title="AI UI/UX Mockup Generator"
            summary="An AI-powered application that transforms text prompts into beautiful UI/UX screen mockups. Users simply describe their ideas in natural language, and the application generates responsive interface designs, helping designers and developers rapidly visualize concepts and accelerate the design process."
            type="Featured Project"
            image="/uiuxMockup.png"
            link="https://ui-ux-mockup.vercel.app/"
            github="https://github.com/diwakar-13/UI-UX-Mockup"
          />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Project
            title="Facebook UI Clone- SocialBook"
            type="Frontend Project"
            image="/socialbook.png"
            link="https://socialbook-ui-demo.onrender.com"
            github="https://github.com/diwakar-13/Facebook-clone-socialbook"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Project
            title="Crypto Screener Application"
            type="Featured Project"
            image="/uiuxMockup.png"
            link="https://crypto-screener-app.netlify.app/"
            github="https://github.com/diwakarpandey410/crypto-screener-app"
          />
        </div>

        <div className="col-span-12">
          <FeaturedProject
            title="Planova-Project Management"
            summary="Planova is a modern project management platform that enables teams to plan projects, manage tasks, track progress, and collaborate seamlessly. Built with a focus on productivity, usability, and scalability, it provides an intuitive workspace for organizing and delivering projects efficiently."
            type="Full Stack Project"
            image="/planova.png"
            link="https://planova-project-management-ggk9.vercel.app/"
            github="https://github.com/diwakar-13/Planova-project-management-"
          />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <Project
            title="Basic Portfolio template"
            type="Template"
            image="/basic_portfolio.png"
            link="https://diwakar-13.github.io/frontend-portfolio-project/"
            github="https://github.com/diwakar-13/frontend-portfolio-project"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Project
            title="Smart civic Complainet system"
            type="CRUD Application"
            image="/complain.png"
            link="https://civic-complainet.vercel.app/"
            github="https://civic-complainet.vercel.app/"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
