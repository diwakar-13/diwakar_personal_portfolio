"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MobileInstagramIcon,
  TwitterIcon,
} from "@/components/Icon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { TextAlignJustify, X } from "lucide-react";
import { SpinningText } from "@/components/ui/spinning-text";

const CustomLink = ({ title, href, className = "", toggle }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (toggle) toggle();
    router.push(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark lg:text-dark lg:dark:text-light text-xl lg:text-base`}
    >
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-light dark:bg-dark lg:bg-dark lg:dark:bg-light ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks = [
    { href: "/", icon: <InstagramIcon />, key: "instagram" },
    { href: "/", icon: <FacebookIcon />, key: "facebook" },
    { href: "/", icon: <GithubIcon />, key: "github" },
    { href: "/", icon: <LinkedInIcon />, key: "linkedin" },
    { href: "/", icon: <TwitterIcon />, key: "twitter" },
  ];
  const MobileSocialLinks = [
    {
      href: "/",
      icon: <MobileInstagramIcon className="dark:text-dark " />,
      key: "instagram",
    },
    { href: "/", icon: <FacebookIcon />, key: "facebook" },
    { href: "/", icon: <GithubIcon />, key: "github" },
    { href: "/", icon: <LinkedInIcon />, key: "linkedin" },
    { href: "/", icon: <TwitterIcon />, key: "twitter" },
  ];

  return (
    <header className="w-full px-6 md:px-12 lg:px-32 py-8 font-medium flex items-center justify-between relative z-10 dark:text-light">
      {/* Mobile Hamburger Button */}
      <motion.button
        whileTap={{ scale: 0.75 }}
        onClick={handleClick}
        className="lg:hidden flex flex-col cursor-pointer justify-center items-center z-20 p-2"
        aria-label="Toggle Menu"
      >
        <TextAlignJustify className="w-6 h-6" />
      </motion.button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center w-full">
        <nav className="flex space-x-6">
          <CustomLink title="Home" href="/" />
          <CustomLink title="About" href="/about" />
          <CustomLink title="Projects" href="/projects" />
          <CustomLink title="Contact" href="/contact" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-5">
          {socialLinks.map(({ href, icon, key }) => {
            const isInstagram = key === "instagram";
            return (
              <motion.a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                // Baaki saare icons light/dark automatic follow karenge, par tumhara Insta safe rahega
                className={`w-6 ${!isInstagram ? "text-dark dark:text-light fill-current" : ""}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            );
          })}
          <AnimatedThemeToggler
            duration={700}
            variant="circle"
            className="ml-1 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
          />
        </nav>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden flex flex-col items-center fixed left-1/2 top-1/2 justify-between min-w-[85vw] sm:min-w-[70vw] bg-dark/95 dark:bg-light/70 z-30 rounded-xl backdrop-blur-md py-20 px-8 gap-8 shadow-2xl"
          >
            <button
              onClick={handleClick}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-light/10 dark:hover:bg-dark/10 text-light dark:text-dark transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center justify-center  gap-6 mt-4">
              <CustomLink title="Home" href="/" toggle={handleClick} />
              <CustomLink title="About" href="/about" toggle={handleClick} />
              <CustomLink
                title="Projects"
                href="/projects"
                toggle={handleClick}
              />
              <CustomLink
                title="Contact"
                href="/contact"
                toggle={handleClick}
              />
            </nav>

            <nav className="flex items-center justify-center text-light dark:text-dark fill-current flex-wrap sm:gap-4 gap-2">
              {MobileSocialLinks.map(({ href, icon, key }) => {
                return (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Mobile overlay ke overlay dark modes me layout styles standard match hongi
                    className="w-6 "
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {icon}
                  </motion.a>
                );
              })}
              <AnimatedThemeToggler
                duration={700}
                variant="circle"
                className="ml-1 cursor-pointer text-light dark:text-dark transition-all duration-200 hover:-translate-y-0.5"
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Logo />
      </div>
      <div className="lg:hidden absolute -top-4 right-0 flex items-center justify-center w-36 h-36 md:p-20 z-[99999] pointer-events-none">
        <SpinningText
          radius={6}
          duration={10}
          className="text-[10px] md:text-xs font-medium select-none pointer-events-none"
        >
          • Full Stack Developer • Gen AI Enthusiast
        </SpinningText>

        <div className="absolute flex items-center justify-center w-14 h-14 md:w-15 md:h-15 rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black hover:border dark:bg-light dark:text-dark dark:hover:bg-dark cursor-pointer dark:hover:text-light hover:border-gray-500 transition-all duration-300 text-xs md:text-base pointer-events-auto group">
          <Link
            href="mailto:diwakarpandey410@gmail.com"
            className="w-full h-full flex items-center justify-center rounded-full md:text-sm cursor-pointer relative z-[100001]"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
