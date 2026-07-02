"use client";
import React from "react";
import { motion } from "framer-motion";

const animVariants = {
  initial: { 
    x: "0%",       // Shuru me screen ke left side ke bahar (right-full ki wajah se)
    width: "100%" 
  },
  animate: { 
    // 1. Left se enter marega aur pure screen ko cover karega (0% se 100% swipe)
    // 2. Fir wapas left side hi khich jayega width 0% karke (100% se 0% wapas)
    x: ["0%", "100%", "0%"], 
    width: ["100%", "100%", "0%"]
  }
};

const TransitionEffect = () => {
  return (
    <>
      {/* Pehla Div (Pink/Custom Color Layer) */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primaryCustom"
        variants={animVariants}
        initial="initial"
        animate="animate"
        transition={{ times: [0, 0.5, 1], duration: 1.5, ease: "easeInOut" }} // Premium slow speed
      />
      {/* Dusra Div (Light Layer) */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        variants={animVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.15, times: [0, 0.5, 1], duration: 1.5, ease: "easeInOut" }}
      />
      {/* Tisra Div (Bottom/Dark Layer) */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        variants={animVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3, times: [0, 0.5, 1], duration: 1.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;