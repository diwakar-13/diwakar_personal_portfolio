"use client";

import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils"; // Agar cn helper hai toh use karo, nahi toh string interpolation chalega

export default function Education({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.6,
      }}
      viewport={{ once: true, margin: "-100px" }}
      // FIX: 'h-full flex flex-col justify-between' lagaya hai taaki card full height le aur content vertically tight rahe. 
      // Tailwind ka dynamic 'className' receive kiya hai parent (`page.tsx`) se stretch scale trigger karne ke liye.
      className={cn(
        "w-full h-full flex flex-col justify-between rounded-2xl border border-dark/10 dark:border-light/10 p-6 text-left shadow-sm hover:shadow-xl",
        className
      )}
    >
      {/* Top Content Group */}
      <div className="w-full flex-grow">
        <h2 className="mb-5 text-xl flex items-center gap-2 font-bold uppercase dark:text-zinc-400 text-dark/75">
          <span className="dark:text-light text-dark">
            <PaperclipGraduationCap className="w-10 h-10" />
          </span>
          Education
        </h2>

        <h3 className="text-4xl font-bold mb-4">B.Tech</h3>

        <p className="text-lg font-medium leading-relaxed">
          Artificial Intelligence
          <br />& Machine Learning
        </p>

        <div className="w-full h-px dark:bg-light bg-dark/20 my-6" />

        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5" />
          <span className="font-semibold text-lg">LNCT University</span>
        </div>

        <p className="dark:text-zinc-300 text-dark/70 mb-5">Bhopal</p>

        <div className="flex items-center justify-start gap-2 mb-4">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">2023 — 2027</span>
        </div>
      </div>

      {/* Bottom Fixed Description - elements scale stretch align properly */}
      <p className="text-sm leading-relaxed dark:text-zinc-300 text-dark/75 mt-auto">
        Focused on Full Stack Development, Software Engineering, and Generative
        AI.
      </p>
    </motion.div>
  );
}

// Small helper just in case name collision occurs
function PaperclipGraduationCap(props) {
  return <GraduationCap {...props} />;
}