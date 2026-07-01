"use client";
import { useScroll } from "motion/react";
import React, { useRef } from "react";
import { motion } from "motion/react";
import LilIcon from "./LilIcon";

const Detail = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    // FIX: Optimized width calculation for mobile to prevent running off screen bounds
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[85%] sm:w-[70%] md:w-[80%] mx-auto flex flex-col items-start justify-between"
    >
      <LilIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="pl-2 sm:pl-0"
      >
        <h3 className="font-bold capitalize text-base sm:text-lg md:text-2xl break-words">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-pink-400 dark:text-primaryDark capitalize inline-block"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium dark:text-light/75 text-dark/75 text-xs sm:text-sm md:text-base block my-1">
          {time} | {address}  
        </span>
        <p className="font-medium w-full text-xs sm:text-sm md:text-base leading-relaxed">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="lg:mt-64 md:mt-40 mt-24 mb-20 lg:mb-0 w-full max-w-full">
      <h2 className="font-bold text-4xl md:text-7xl lg:text-8xl mb-16 md:mb-32 w-full text-center">
        Experiences
      </h2>

      {/* FIX: Handled scale layout widths securely for extreme responsive viewports */}
      <div className="w-full md:w-[75%]  lg:w-[50%] mx-auto relative px-2">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-1 w-[2px] sm:w-[4px] h-full dark:bg-light bg-dark origin-top"
        />
        <ul className="flex flex-col items-start w-full justify-between pl-4 sm:ml-9 lg:ml-10 ml-3">
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address=" Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address=" Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address=" Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;