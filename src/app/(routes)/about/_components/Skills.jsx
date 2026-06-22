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

// style prop lagaya hai taaki brand colors exact accurately render hon
const Skill = ({ name, x, y, icon: Icon, bgColor, textColor }) => {
  return (
    <motion.div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="flex items-center justify-center gap-2 rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      {Icon && <Icon className="w-5 h-5" style={{ color: textColor }} />}
      <span>{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h1 className="text-8xl w-full text-center mt-64 font-bold">Skills</h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
          className="flex items-center justify-center gap-2 rounded-full font-semibold p-5 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <HiSquare3Stack3D className="w-5 h-5" />
          <span>Full stack</span>
        </motion.div>

        {/* Brand Colors Applied Meticulously */}
        <Skill
          name={"HTML5"}
          x={"-19vw"}
          y={"0vw"}
          icon={FaHtml5}
          bgColor="#e34c26"
          textColor="#ffffff"
        />
        <Skill
          name={"CSS3"}
          x={"0vw"}
          y={"-11vw"}
          icon={FaCss3}
          bgColor="#264de4"
          textColor="#ffffff"
        />
        <Skill
          name={"JavaScript"}
          x={"19vw"}
          y={"0vw"}
          icon={IoLogoJavascript}
          bgColor="#f7df1e"
          textColor="#000000"
        />
        <Skill
          name={"React.js"}
          x={"0vw"}
          y={"11vw"}
          icon={FaReact}
          bgColor="#61dafb"
          textColor="#000000"
        />

        <Skill
          name={"Next.js"}
          x={"-20vw"}
          y={"-10vw"}
          icon={SiNextdotjs}
          bgColor="#000000"
          textColor="#ffffff"
        />
        <Skill
          name={"Tailwind CSS"}
          x={"20vw"}
          y={"-10vw"}
          icon={SiTailwindcss}
          bgColor="#38bdf8"
          textColor="#000000"
        />
        <Skill
          name={"Node.js"}
          x={"-20vw"}
          y={"10vw"}
          icon={FaNodeJs}
          bgColor="#339933"
          textColor="#ffffff"
        />
        <Skill
          name={"Express.js"}
          x={"20vw"}
          y={"10vw"}
          icon={SiExpress}
          bgColor="#303030"
          textColor="#ffffff"
        />

        <Skill
          name={"PostgreSQL"}
          x={"-33vw"}
          y={"0vw"}
          icon={SiPostgresql}
          bgColor="#336791"
          textColor="#ffffff"
        />
        <Skill
          name={"MongoDB"}
          x={"33vw"}
          y={"0vw"}
          icon={SiMongodb}
          bgColor="#47a248"
          textColor="#ffffff"
        />

        <Skill
          name={"Python"}
          x={"0vw"}
          y={"-19vw"}
          icon={FaPython}
          bgColor="#3776ab"
          textColor="#ffffff"
        />
        <Skill
          name={"Gen AI"}
          x={"0vw"}
          y={"19vw"}
          icon={GrGenai}
          bgColor="#8a2be2"
          textColor="#ffffff"
        />

        <Skill
          name={"Drizzle ORM"}
          x={"-24vw"}
          y={"-18vw"}
          icon={SiDrizzle}
          bgColor="#c5f74f"
          textColor="#000000"
        />
        <Skill
          name={"Clerk"}
          x={"22vw"}
          y={"-18vw"}
          icon={SiClerk}
          bgColor="#6c47ff"
          textColor="#ffffff"
        />

        <Skill
          name={"REST APIs"}
          x={"-24vw"}
          y={"18vw"}
          icon={Link2}
          bgColor="#00bfff"
          textColor="#000000"
        />
        <Skill
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
