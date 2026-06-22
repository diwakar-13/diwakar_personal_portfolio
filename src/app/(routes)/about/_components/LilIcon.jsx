import React from "react";
import { useScroll, motion } from "motion/react";

const LilIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 dark:stroke-light stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-pink-500 dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] dark:fill-dark fill-light"
        />
        <circle cx="75" cy="50" r="10" className=" animate-pulse stroke-1 fill-pink-500 dark:fill-primaryDark" />
      </svg>
    </figure>
  );
};

export default LilIcon;
