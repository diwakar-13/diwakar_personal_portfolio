"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import AnimatedText from "@/app/_components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
// IMPORT AXIOS
import axios from "axios";

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

  // SUBMIT STATUS STATES
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    try {
      // USING AXIOS INSTEAD OF FETCH
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Axios automatically parses JSON, data is available in response.data
      if (response.status === 200 && response.data.success) {
        setStatusMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form inputs
      } else {
        setStatusMessage({ type: "error", text: response.data.error || "Something went wrong." });
      }
    } catch (error) {
      // Axios stores server error responses in error.response
      const errorMsg = error.response?.data?.error || "Failed to send message. Please try again.";
      setStatusMessage({ type: "error", text: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // FIX: Optimized padding fluid hierarchy for all viewports (p-4 for mobile, p-8 for md/tablet, p-32 for desktop lg)
    <main className="flex w-full max-w-full overflow-x-hidden p-4 pb-20 xl:mb-0   sm:p-6 md:p-8 lg:p-32 lg:pt-16 flex-col items-center justify-center dark:text-light">
      {/* Page Title scaling responsively */}
      <AnimatedText
        text="Let's Build Something Together!"
        className="mb-10 sm:mb-16 !text-4xl md:!text-6xl  xl:!text-8xl !leading-tight !text-center"
      />

      {/* FIXED BREAKPOINTS FOR MEDIUM SCREEN:
        - Mobile & Medium (up to md/lg): 'grid-cols-1' or 'lg:grid-cols-12' handling.
        - Split layouts only trigger on 'lg:' desktop layouts so tablet views get clean stacked margins.
      */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
        {/* ========================================================
            Left Side: Contact Details Card (Stacked on md, Side-by-side on lg)
            ======================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-1 lg:col-span-5 w-[calc(100%-12px)] md:w-[90%] lg:w-full mx-auto flex flex-col justify-between rounded-3xl border border-solid border-dark dark:border-light dark:bg-dark bg-light shadow-2xl p-6 sm:p-10 relative rounded-br-2xl"
        >
          <motion.div
            variants={shadowVariants}
            className="absolute top-0 -right-2 sm:-right-3 -z-10 h-[102%] sm:h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl dark:bg-light bg-dark"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 dark:text-light text-dark">
              Contact Info
            </h2>
            <p className="font-medium text-sm sm:text-base dark:text-light/75 text-dark/80 mb-6 sm:mb-10 leading-relaxed">
              Have an exciting project idea, a startup concept, or just want to
              chat about Generative AI and web development? Drop a message!
            </p>

            <div className="flex flex-col gap-6 sm:gap-8">
              {/* 1. Email Wrapper Link */}
              {/* FIX: Appended missing '.com' extension inside mailto scheme to avoid crash loops */}
              <Link
                href="mailto:diwakarpandey410@gmail.com"
                className="block group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 sm:p-3 bg-dark dark:bg-light dark:text-dark text-light rounded-xl flex-shrink-0"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold uppercase dark:text-light/50 text-dark/50 tracking-wider">
                      Email
                    </h4>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg dark:text-light text-dark break-all group-hover:underline">
                      diwakarpandey410@gmail.com
                    </p>
                  </div>
                </div>
              </Link>

              {/* 2. Phone Wrapper (Call triggers ONLY on mobile viewports via responsive pointer-events) */}
              <div className="block md:pointer-events-none">
                <Link href="tel:+916307806837" className="block group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 sm:p-3 bg-dark dark:bg-light dark:text-dark text-light rounded-xl flex-shrink-0 md:!transform-none"
                    >
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold uppercase dark:text-light/50 text-dark/50 tracking-wider">
                        Phone / WhatsApp
                      </h4>
                      <p className="font-semibold text-sm sm:text-base lg:text-lg dark:text-light text-dark md:group-hover:no-underline group-hover:underline">
                        +91 6307806837
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* 3. Location Wrapper (Global Maps target links applied directly to all responsive viewports) */}
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Bhopal,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 sm:p-3 dark:bg-light dark:text-dark bg-dark text-light rounded-xl flex-shrink-0"
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold uppercase dark:text-light/50 text-dark/50 tracking-wider">
                      Location
                    </h4>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg dark:text-light text-dark break-words group-hover:underline">
                      Bhopal, India
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            Right Side: Interactive Form Card (Stacked on md, Side-by-side on lg)
            ======================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-1 lg:col-span-7 w-[calc(100%-12px)] md:w-[90%] lg:w-full mx-auto rounded-3xl border border-solid dark:border-light dark:bg-dark border-dark bg-light shadow-2xl p-6 sm:p-10 relative rounded-br-2xl"
        >
          <motion.div
            variants={shadowVariants}
            className="absolute top-0 -right-2 sm:-right-3 -z-10 h-[102%] w-[101%] rounded-[2.5rem] rounded-br-3xl dark:bg-light bg-dark"
          />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 sm:gap-6 w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 dark:text-light text-dark">
              Send a Message
            </h2>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold dark:text-light/90 text-dark text-base sm:text-lg">
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
                className="w-full p-3.5 sm:p-4 rounded-xl border border-solid border-dark/20 dark:bg-dark dark:text-light dark:focus:border-2 dark:border-light bg-light focus:border-dark outline-none text-sm sm:text-base font-medium transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold dark:text-light/90 text-dark text-base sm:text-lg">
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
                className="w-full p-3.5 sm:p-4 rounded-xl border border-solid border-dark/20 dark:bg-dark dark:text-light dark:focus:border-2 dark:border-light bg-light focus:border-dark outline-none text-sm sm:text-base font-medium transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold dark:text-light/90 text-dark text-base sm:text-lg">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3.5 sm:p-4 rounded-xl border border-solid border-dark/20 dark:bg-dark dark:text-light dark:focus:border-2 dark:border-light bg-light focus:border-dark outline-none text-sm sm:text-base font-medium resize-none transition-all duration-200"
              />
            </div>

            {/* STATUS NOTIFICATION TEXT */}
            {statusMessage.text && (
              <p className={`text-sm font-semibold ${statusMessage.type === "success" ? "text-green-500" : "text-red-500"}`}>
                {statusMessage.text}
              </p>
            )}

            <div className="mt-2 flex justify-start w-full">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 p-5 sm:p-6 text-base sm:text-lg font-bold transition-transform duration-200 active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}