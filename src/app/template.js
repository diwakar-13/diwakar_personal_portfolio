"use client";
import { usePathname } from "next/navigation";
import TransitionEffect from "@/components/TransitionEffect"; 
import { motion } from "framer-motion";

export default function Template({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="relative">
      <TransitionEffect />
      
      {/* Jab divs screen ko smooth sweep karke nikal rahe honge, tab ye fade-in hoga */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }} // Delay badha diya taaki text sahi time pe aaye
      >
        {children}
      </motion.div>
    </div>
  );
}