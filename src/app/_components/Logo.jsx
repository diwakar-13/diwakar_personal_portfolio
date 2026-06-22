"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const MotionLink = motion(Link);
  return (
    <div className="mt-2 flex items-center justify-center">
      <MotionLink
        href={"/"}
        className="bg-dark  text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold  border border-solid cursor-pointer dark:border-light border-transparent  "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        DP
      </MotionLink>
    </div>
  );
};

export default Logo;
