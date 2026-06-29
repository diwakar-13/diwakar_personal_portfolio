"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/Icon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const CustomLink = ({ title, href, className = "" }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] w-0 bg-dark inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${pathName === href ? "w-full" : "w-0  "} `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink title="Home" href={"/"} className="mr-4" />
        <CustomLink title="About" href={"/about"} className="mx-4" />
        <CustomLink title="Projects" href={"/projects"} className="mx-4" />
        <CustomLink title="Contact" href={"/contact"} className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href={"/"}
          target={"_blank"}
          className="w-6 mr-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          href={"/"}
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon />
        </motion.a>
        <motion.a
          href={"/"}
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href={"/"}
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href={"/"}
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <AnimatedThemeToggler duration={700} variant={"circle"} className="ml-1 cursor-pointer transition-all duration-200 hover:-translate-y-0.5" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
