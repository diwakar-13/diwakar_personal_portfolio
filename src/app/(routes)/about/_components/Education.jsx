"use client";

import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <motion.div
      // Tagda Animation Properties
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
      className="w-full rounded-2xl border border-dark/10 p-6 text-left shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="mb-5 text-xl flex items-center gap-2 font-bold uppercase text-dark/75">
        <span className="text-dark">
          <GraduationCap className="w-10 h-10" />
        </span>{" "}
        Education
      </h2>

      <h3 className="text-4xl font-bold mb-4">B.Tech</h3>

      <p className="text-lg font-medium leading-relaxed">
        Artificial Intelligence
        <br />& Machine Learning
      </p>

      <div className="w-full h-px bg-dark/20 my-6" />

      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-5 h-5" />
        <span className="font-semibold text-lg">LNCT University</span>
      </div>

      <p className="text-dark/70 mb-5">Bhopal</p>

      <div className="flex items-center justify-start gap-2 mb-6">
        <Calendar className="w-5 h-5" />
        <span className="font-medium">2023 — 2027</span>
      </div>

      <p className="text-sm leading-relaxed text-dark/75">
        Focused on Full Stack Development, Software Engineering, and Generative
        AI.
      </p>
    </motion.div>
  );
}
