"use client";

import AnimatedText from "@/app/_components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
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
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light dark:bg-dark bg-light shadow-2xl p-10 relative rounded-br-2xl"
    >
      {/* jb tak white card nahi aayega, ye shadow hidden rahegi (0% bleed-through) */}
      <motion.div
        variants={shadowVariants}
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl dark:bg-light bg-dark"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-2xl "
      >
        <FramerImage
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          src={image}
          width={200}
          height={200}
          alt={title}
          className="w-full h-auto rounded-xl"
          preload
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-pink-400 dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium dark:text-light text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10" target="_blank">
            <GithubIcon className="hover:scale-125 duration-300 ease-in active:scale-95" />
          </Link>
          <Link href={link} target="_blank" className="ml-4">
            <InteractiveHoverButton className="rounded-md dark:border-light border-dark boeder">
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
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid dark:border-light dark:bg-dark border-dark bg-light p-6 relative"
    >
      {/* Same dynamic variants implementation for standalone project cards */}
      <motion.div
        variants={shadowVariants}
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl dark:bg-light bg-dark"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-2xl "
      >
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <FramerImage
            src={image}
            width={200}
            height={200}
            alt={title}
            className="w-full h-auto rounded-xl"
            preload
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>
      </Link>
      <div className="w-full flex flex-col items-start justify-between pt-4">
        <span className="text-pink-400 dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className=" underline text-lg font-semibold "
          >
            Visit
          </Link>
          <Link href={github} className="w-8" target="_blank">
            <GithubIcon className="hover:scale-125 ease-in duration-200 active:scale-95 " />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const page = () => {
  return (
    <main className="flex w-full p-32 pt-16 flex-col items-center justify-center">
      <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

      <div className="grid grid-cols-12 gap-24 gap-y-32">
        <div className="col-span-12">
          <FeaturedProject
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            type="Featured Project"
            image="/uiuxMockup.png"
            link="https://crypto-screener-app.netlify.app/"
            github="https://github.com/diwakarpandey410/crypto-screener-app"
          />
        </div>
        <div className="col-span-6">
          <Project
            title="Crypto Screener Application"
            type="Featured Project"
            image="/uiuxMockup.png"
            link="https://crypto-screener-app.netlify.app/"
            github="https://github.com/diwakarpandey410/crypto-screener-app"
          />
        </div>
        <div className="col-span-6">
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
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            type="Featured Project"
            image="/uiuxMockup.png"
            link="https://crypto-screener-app.netlify.app/"
            github="https://github.com/diwakarpandey410/crypto-screener-app"
          />
        </div>
        <div className="col-span-6">
          <Project
            title="Crypto Screener Application"
            type="Featured Project"
            image="/uiuxMockup.png"
            link="https://crypto-screener-app.netlify.app/"
            github="https://github.com/diwakarpandey410/crypto-screener-app"
          />
        </div>
        <div className="col-span-6">
          <Project
            title="Crypto Screener Application"
            type="Featured Project"
            image="/uiuxMockup.png"
            link="https://crypto-screener-app.netlify.app/"
            github="https://github.com/diwakarpandey410/crypto-screener-app"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
