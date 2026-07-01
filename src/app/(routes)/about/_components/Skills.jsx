"use client";
import React from "react";
import { motion } from "motion/react";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiClerk,
  SiDrizzle,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { GrGenai } from "react-icons/gr";
import { Link2 } from "lucide-react";
import { HiSquare3Stack3D } from "react-icons/hi2";

// 1. DESKTOP SKILL COMPONENT
const DesktopSkill = ({ name, x, y, icon: Icon, bgColor, textColor }) => {
  return (
    <motion.div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="flex items-center justify-center gap-2 rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 whitespace-nowrap"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {Icon && <Icon className="w-5 h-5" style={{ color: textColor }} />}
      <span>{name}</span>
    </motion.div>
  );
};

// 2. MEDIUM SCREEN (TABLET) ONLY SKILL COMPONENT 
// FIX: Reduced padding and text size to text-xs to absolutely prevent overlaps seen in image_fb1bb1.png
const MediumSkill = ({ name, x, y, icon: Icon, bgColor, textColor }) => {
  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        "--md-x": x,
        "--md-y": y,
      }}
      className="flex items-center justify-center gap-1.5 rounded-full font-semibold py-1.5 px-3 shadow-dark cursor-pointer absolute text-xs whitespace-nowrap"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: "var(--md-x)",
        y: "var(--md-y)",
        transition: { duration: 1.3 },
      }}
      viewport={{ once: true }}
    >
      {Icon && <Icon className="w-4 h-4" style={{ color: textColor }} />}
      <span>{name}</span>
    </motion.div>
  );
};

// 3. MOBILE ONLY SKILL COMPONENT
const MobileSkill = ({ name, x, y, icon: Icon, bgColor, textColor }) => {
  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        "--mobile-x": x,
        "--mobile-y": y,
      }}
      className="flex items-center justify-center gap-1.5 rounded-full font-bold py-1.5 px-3 shadow-dark cursor-pointer absolute text-xs whitespace-nowrap [transform:translate(var(--mobile-x),var(--mobile-y))]"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: "var(--mobile-x)",
        y: "var(--mobile-y)",
        transition: { duration: 1.2 },
      }}
      viewport={{ once: true }}
    >
      {Icon && <Icon className="w-3.5 h-3.5" style={{ color: textColor }} />}
      <span>{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h1 className="text-5xl md:text-6xl lg:text-8xl w-full text-center mt-20 mb-3 md:mb-5 lg:mb-0 md:mt-32 lg:mt-64 font-bold select-none">
        Skills
      </h1>

      {/* ========================================================
          MOBILE VIEW CONTAINER
          ======================================================== */}
      <div className="flex md:hidden w-full max-w-[calc(100vw-16px)] h-[50vh] mx-auto relative items-center justify-center rounded-full bg-circularLight dark:bg-circularDark overflow-hidden select-none">
        <motion.div
          className="flex items-center justify-center gap-1.5 rounded-full dark:bg-light dark:text-dark bg-dark text-light font-semibold p-2.5 shadow-dark text-[11px] z-10"
          whileHover={{ scale: 1.05 }}
        >
          <HiSquare3Stack3D className="w-4 h-4" />
          <span>Full stack</span>
        </motion.div>

        <MobileSkill
          name={"Next.js"}
          x={"-23vw"}
          y={"-16vw"}
          icon={SiNextdotjs}
          bgColor="#000000"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"React.js"}
          x={"0vw"}
          y={"20vw"}
          icon={FaReact}
          bgColor="#61dafb"
          textColor="#000000"
        />
        <MobileSkill
          name={"Tailwind CSS"}
          x={"23vw"}
          y={"-16vw"}
          icon={SiTailwindcss}
          bgColor="#38bdf8"
          textColor="#000000"
        />
        <MobileSkill
          name={"Node.js"}
          x={"-28vw"}
          y={"14vw"}
          icon={FaNodeJs}
          bgColor="#339933"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"Express.js"}
          x={"28vw"}
          y={"14vw"}
          icon={SiExpress}
          bgColor="#303030"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"PostgreSQL"}
          x={"-30vw"}
          y={"-2vw"}
          icon={SiPostgresql}
          bgColor="#336791"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"MongoDB"}
          x={"30vw"}
          y={"-2vw"}
          icon={SiMongodb}
          bgColor="#47a248"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"Gen AI"}
          x={"-2vw"}
          y={"43vw"}
          icon={GrGenai}
          bgColor="#8a2be2"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"Git"}
          x={"26vw"}
          y={"28vw"}
          icon={FaGitAlt}
          bgColor="#f05032"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"HTML5"}
          x={"-26vw"}
          y={"-28vw"}
          icon={FaHtml5}
          bgColor="#e34c26"
          textColor="#ffffff"
        />
        <MobileSkill
          name={"JavaScript"}
          x={"26vw"}
          y={"-28vw"}
          icon={IoLogoJavascript}
          bgColor="#f7df1e"
          textColor="#000000"
        />
     <MobileSkill
          name={"Python"}
          x={"0vw"}
          y={"-43vw"}
          icon={FaPython}
          bgColor="#3776ab"
          textColor="#ffffff"
        />
      </div>

      {/* ========================================================
          MEDIUM SCREEN (TABLET) CONTAINER (Fixed Overlaps)
          ======================================================== */}
      <div className="hidden md:flex lg:hidden w-full h-[70vh] relative items-center justify-center rounded-full dark:bg-circularDark bg-circularLight overflow-hidden select-none">
        <motion.div
          className="flex items-center justify-center gap-2 rounded-full dark:bg-light dark:text-dark bg-dark text-light font-semibold p-4 shadow-dark cursor-pointer z-10"
          whileHover={{ scale: 1.05 }}
        >
          <HiSquare3Stack3D className="w-4 h-4" />
          <span>Full stack</span>
        </motion.div>

        {/* FIX: Restored original desktop gap proportions (14vw difference) to fix HTML5/PostgreSQL & JS/MongoDB overlap */}
        <MediumSkill
          name={"HTML5"}
          x={"-18vw"}
          y={"0vw"}
          icon={FaHtml5}
          bgColor="#e34c26"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"CSS3"}
          x={"0vw"}
          y={"-11vw"}
          icon={FaCss3}
          bgColor="#264de4"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"JavaScript"}
          x={"18vw"}
          y={"0vw"}
          icon={IoLogoJavascript}
          bgColor="#f7df1e"
          textColor="#000000"
        />
        <MediumSkill
          name={"React.js"}
          x={"0vw"}
          y={"11vw"}
          icon={FaReact}
          bgColor="#61dafb"
          textColor="#000000"
        />
        <MediumSkill
          name={"Next.js"}
          x={"-20vw"}
          y={"-10vw"}
          icon={SiNextdotjs}
          bgColor="#000000"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"Tailwind CSS"}
          x={"20vw"}
          y={"-10vw"}
          icon={SiTailwindcss}
          bgColor="#38bdf8"
          textColor="#000000"
        />
        <MediumSkill
          name={"Node.js"}
          x={"-20vw"}
          y={"10vw"}
          icon={FaNodeJs}
          bgColor="#339933"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"Express.js"}
          x={"20vw"}
          y={"10vw"}
          icon={SiExpress}
          bgColor="#303030"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"PostgreSQL"}
          x={"-35vw"}
          y={"0vw"}
          icon={SiPostgresql}
          bgColor="#336791"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"MongoDB"}
          x={"35vw"}
          y={"0vw"}
          icon={SiMongodb}
          bgColor="#47a248"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"Python"}
          x={"0vw"}
          y={"-21vw"}
          icon={FaPython}
          bgColor="#3776ab"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"Gen AI"}
          x={"0vw"}
          y={"21vw"}
          icon={GrGenai}
          bgColor="#8a2be2"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"Drizzle ORM"}
          x={"-25vw"}
          y={"-22vw"}
          icon={SiDrizzle}
          bgColor="#c5f74f"
          textColor="#000000"
        />
        <MediumSkill
          name={"Clerk"}
          x={"24vw"}
          y={"-22vw"}
          icon={SiClerk}
          bgColor="#6c47ff"
          textColor="#ffffff"
        />
        <MediumSkill
          name={"REST APIs"}
          x={"-21vw"}
          y={"17vw"}
          icon={Link2}
          bgColor="#00bfff"
          textColor="#000000"
        />
        <MediumSkill
          name={"Git"}
          x={"24vw"}
          y={"16vw"}
          icon={FaGitAlt}
          bgColor="#f05032"
          textColor="#ffffff"
        />
      </div>

      {/* ========================================================
          DESKTOP & LARGE VIEW CONTAINER
          ======================================================== */}
      <div className="hidden lg:flex w-full h-screen relative items-center justify-center rounded-full dark:bg-circularDark bg-circularLight">
        <motion.div
          className="flex items-center justify-center gap-2 rounded-full dark:bg-light dark:text-dark bg-dark text-light font-semibold p-6 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <HiSquare3Stack3D className="w-5 h-5" />
          <span>Full stack</span>
        </motion.div>

        <DesktopSkill
          name={"HTML5"}
          x={"-19vw"}
          y={"0vw"}
          icon={FaHtml5}
          bgColor="#e34c26"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"CSS3"}
          x={"0vw"}
          y={"-11vw"}
          icon={FaCss3}
          bgColor="#264de4"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"JavaScript"}
          x={"19vw"}
          y={"0vw"}
          icon={IoLogoJavascript}
          bgColor="#f7df1e"
          textColor="#000000"
        />
        <DesktopSkill
          name={"React.js"}
          x={"0vw"}
          y={"11vw"}
          icon={FaReact}
          bgColor="#61dafb"
          textColor="#000000"
        />
        <DesktopSkill
          name={"Next.js"}
          x={"-20vw"}
          y={"-10vw"}
          icon={SiNextdotjs}
          bgColor="#000000"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"Tailwind CSS"}
          x={"20vw"}
          y={"-10vw"}
          icon={SiTailwindcss}
          bgColor="#38bdf8"
          textColor="#000000"
        />
        <DesktopSkill
          name={"Node.js"}
          x={"-20vw"}
          y={"10vw"}
          icon={FaNodeJs}
          bgColor="#339933"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"Express.js"}
          x={"20vw"}
          y={"10vw"}
          icon={SiExpress}
          bgColor="#303030"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"PostgreSQL"}
          x={"-33vw"}
          y={"0vw"}
          icon={SiPostgresql}
          bgColor="#336791"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"MongoDB"}
          x={"33vw"}
          y={"0vw"}
          icon={SiMongodb}
          bgColor="#47a248"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"Python"}
          x={"0vw"}
          y={"-19vw"}
          icon={FaPython}
          bgColor="#3776ab"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"Gen AI"}
          x={"0vw"}
          y={"19vw"}
          icon={GrGenai}
          bgColor="#8a2be2"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"Drizzle ORM"}
          x={"-24vw"}
          y={"-18vw"}
          icon={SiDrizzle}
          bgColor="#c5f74f"
          textColor="#000000"
        />
        <DesktopSkill
          name={"Clerk"}
          x={"22vw"}
          y={"-18vw"}
          icon={SiClerk}
          bgColor="#6c47ff"
          textColor="#ffffff"
        />
        <DesktopSkill
          name={"REST APIs"}
          x={"-24vw"}
          y={"18vw"}
          icon={Link2}
          bgColor="#00bfff"
          textColor="#000000"
        />
        <DesktopSkill
          name={"Git"}
          x={"22vw"}
          y={"18vw"}
          icon={FaGitAlt}
          bgColor="#f05032"
          textColor="#ffffff"
        />
      </div>
    </>
  );
};

export default Skills;