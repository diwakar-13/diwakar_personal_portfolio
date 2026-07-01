"use client";

import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

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
      // FIX: Mobile screens par padding p-4/p-5 rakha hai taaki overflow na kare aur desktop par full height stretch balanced rahe.
      className={cn(
        "w-full h-full flex flex-col justify-between rounded-2xl border border-dark/10 dark:border-light/10 p-4 xs:p-5 sm:p-6 text-left shadow-sm hover:shadow-xl box-border",
        className
      )}
    >
      <div className="w-full flex-grow">
        {/* FIX: Heading elements compact on smaller mobile views */}
        <h2 className="mb-4 sm:mb-5 text-sm xs:text-base sm:text-xl flex items-center gap-2 font-bold uppercase dark:text-zinc-400 text-dark/75 tracking-wider">
          <span className="dark:text-light text-dark flex-shrink-0">
            <PaperclipGraduationCap className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
          </span>
          Education
        </h2>

        <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">B.Tech</h3>

        {/* FIX: Text scaling to avoid ugly forced line-breaks on thin mobile panels */}
        <p className="text-sm xs:text-base sm:text-lg font-medium leading-relaxed break-words">
          Artificial Intelligence
          <span className="hidden xs:inline"> & </span>
          <br className="xs:hidden" />
          Machine Learning
        </p>

        <div className="w-full h-px dark:bg-light/20 bg-dark/20 my-4 sm:my-6" />

        {/* Info cluster uses tight flex layouts */}
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 xs:w-5 h-5 flex-shrink-0 text-dark/85 dark:text-light/85" />
          <span className="font-semibold text-sm xs:text-base sm:text-lg">LNCT University</span>
        </div>

        <p className="dark:text-zinc-300 text-dark/70 mb-4 sm:mb-5 text-xs xs:text-sm sm:text-base pl-6">
          Bhopal
        </p>

        <div className="flex items-center justify-start gap-2 mb-4">
          <Calendar className="w-4 h-4 xs:w-5 h-5 flex-shrink-0 text-dark/85 dark:text-light/85" />
          <span className="font-medium text-xs xs:text-sm sm:text-base">2023 — 2027</span>
        </div>
      </div>

      {/* Bottom Description Footer */}
      <p className="text-[11px] xs:text-xs sm:text-sm leading-relaxed dark:text-zinc-300 text-dark/75 mt-auto border-t border-dashed border-dark/10 dark:border-light/10 pt-3">
        Focused on Full Stack Development, Software Engineering, and Generative AI.
      </p>
    </motion.div>
  );
}

function PaperclipGraduationCap(props) {
  return <GraduationCap {...props} />;
}