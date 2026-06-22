"use client";
import { useScroll } from "motion/react";
import React, { useRef } from "react";
import { motion } from "motion/react";
import LilIcon from "./LilIcon";

const Detail = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb:-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LilIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-pink-400 capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
    <div className="mt-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experiences
      </h2>

      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="flex flex-col items-start w-full justify-between ml-4">
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address=" Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address=" Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address=" Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address=" Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
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
