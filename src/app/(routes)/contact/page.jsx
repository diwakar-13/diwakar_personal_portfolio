"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import AnimatedText from "@/app/_components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren" },
  },
};

const shadowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aap yahan apna email integration ya API logic laga sakte ho
    console.log("Form Submitted:", formData);
  };

  return (
    <main className="flex w-full p-32 pt-16 flex-col items-center justify-center">
      {/* Page Title using your AnimatedText component */}
      <AnimatedText text="Let's Build Something Together!" className="mb-16" />

      <div className="grid w-full grid-cols-12 gap-16 items-start">
        {/* Left Side: Contact Details Card (col-span-5) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-5 flex flex-col justify-between rounded-3xl border border-solid border-dark dark:border-light dark:bg-dark bg-light shadow-2xl p-10 relative rounded-br-2xl"
        >
          <motion.div
            variants={shadowVariants}
            className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl dark:bg-light bg-dark"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6   dark:text-light text-dark">
              Contact Info
            </h2>
            <p className="font-medium dark:text-light/75 text-dark/80 mb-10">
              Have an exciting project idea, a startup concept, or just want to
              chat about Generative AI and web development? Drop a message!
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dark dark:bg-light dark:text-dark text-light rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase dark:text-light/50 text-dark/50">
                    Email
                  </h4>
                  <p className="font-semibold text-lg dark:text-light text-dark">
                    diwakarpandey410@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-dark dark:bg-light dark:text-dark text-light rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase dark:text-light/50 text-dark/50">
                    Phone / WhatsApp
                  </h4>
                  <p className="font-semibold text-lg dark:text-light text-dark">
                    +91 6307806837
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 dark:bg-light dark:text-dark bg-dark text-light rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase dark:text-light/50  text-dark/50">
                    Location
                  </h4>
                  <p className="font-semibold text-lg dark:text-light text-dark">
                    Bhopal, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Form Card (col-span-7) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-7 rounded-3xl border border-solid dark:border-light dark:bg-dark  border-dark bg-light shadow-2xl p-10 relative rounded-br-2xl"
        >
          <motion.div
            variants={shadowVariants}
            className="absolute top-0 -right-3 -z-10 h-[102%] w-[101%] rounded-[2.5rem] rounded-br-3xl dark:bg-light   bg-dark"
          />

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <h2 className="text-3xl font-bold mb-2 dark:text-light text-dark">
              Send a Message
            </h2>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold dark:text-light/90 text-dark text-lg">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 rounded-xl border-1 border-solid border-dark/20 dark:bg-dark dark:text-light dark:focus:border-3 dark:border-light bg-light focus:border-dark outline-none font-medium transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold dark:text-light/90 text-dark text-lg">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 rounded-xl border-1 border-solid border-dark/20 dark:bg-dark dark:text-light dark:focus:border-3 dark:border-light bg-light focus:border-dark outline-none font-medium transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold dark:text-light/90 text-dark text-lg">Message</label>
              <textarea
                rows="5"
                required
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-4 rounded-xl border-1 border-solid border-dark/20  dark:bg-dark dark:text-light dark:focus:border-3 dark:border-light bg-light focus:border-dark outline-none font-medium resize-none transition-colors duration-200"
              />
            </div>

            <div className="mt-2 flex justify-start">
              <Button
                type="submit"
                className="flex items-center  gap-2 p-6 text-lg font-bold"
              >
                <Send className="w-8 h-8" size={20} />
                <span>Send Message</span>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
