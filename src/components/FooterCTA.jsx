"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedGradientButton from "./ui/animated-gradient-button";

export default function FooterCTA() {
  return (
    <footer className="relative overflow-hidden pb-10">
      {/* Background image - only in dark theme */}
      <Image
        src="/Images/footerbg.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center opacity-0 dark:opacity-80"
      />
      {/* Top soft fade overlay to make image start subtle */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-[5] h-32 sm:h-48 lg:h-56 bg-gradient-to-b from-white via-white/40 to-transparent dark:from-black dark:via-black/40 dark:to-transparent" />
      {/* Ambient arc/gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 sm:-top-60 -z-20 h-[420px] sm:h-[520px] bg-gradient-to-b from-purple-500/10 via-orange-500/5 to-transparent dark:from-purple-500/10 dark:via-orange-500/5 dark:to-transparent" />

      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center pt-14 sm:pt-20 lg:pt-28"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            <span className="block">
              Ready to elevate your{" "}
              <span className="text-purple-600 dark:text-purple-400">
                business with high-converting web design
              </span>
              ?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-3 sm:mt-4 max-w-3xl md:max-w-4xl text-foreground/80 text-sm xs:text-base sm:text-lg leading-relaxed"
          >
            <span className="block">
              We design and build bespoke frontend websites for US small businesses,
            </span>
            <span className="block">
              powered by intelligent AI analytics that track your traffic and bookings
            </span>
            <span className="block">to tell you exactly how to grow your revenue.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <AnimatedGradientButton
              size="mobile"
              variant="primary"
              showArrow={true}
              arrowDirection="right"
              className="max-w-[110px] px-3 max-w-full sm:w-auto mt-6 sm:mt-8 text-xs sm:text-base"
              onClick={(e) => {
                e.preventDefault();
                // Scroll to contact or demo section
                const target =
                  document.querySelector("#contact") ||
                  document.querySelector("#demo");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  // Fallback to external contact
                  window.location.href = "mailto:connect@lumenoor.com";
                }
              }}
            >
              Get Your Free Demo
            </AnimatedGradientButton>
          </motion.div>
        </motion.div>

        <div className="flex flex-col  items-center gap-3 pt-14 sm:pt-26">
          <Image
            src="/Images/logo-black.png"
            alt="LumeNoor Logo"
            width={200}
            height={200}
            className="block dark:hidden h-auto w-40 sm:w-52 lg:w-60"
            priority
          />
          <Image
            src="/Images/logo-white.png"
            alt="LumeNoor Logo"
            width={200}
            height={200}
            className="hidden dark:block h-auto w-40 sm:w-52 lg:w-60"
            priority
          />
          <span className="text-foreground/70 text-sm sm:text-base">
            Custom Frontend Web Development & AI Growth for US Businesses
          </span>
        </div>

        {/* Contact Information */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-foreground/85 text-sm sm:text-base">
          {/* Email */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="w-5 h-5"
              fill="none"
            >
              <path
                d="M21.2832 3.69011c-.101-.10075-.2289-.17052-.3684-.20108-.1395-.03056-.2848-.02065-.4189.02856L3.99573 9.51761A.75.75 0 0 0 3.51172 10.2189c0 .1521.0463.3007.13275.426.08645.1252.20897.2211.35127.2751l6.44246 2.5725 4.755-4.77 1.0575 1.0575-4.7775 4.7775 2.58 6.4425a.75.75 0 0 0 1.4112-.0698l6-16.5a.75.75 0 0 0-.1969-.7875Z"
                fill="currentColor"
              />
            </svg>
            <a
              href="mailto:connect@lumenoor.com"
              className="hover:underline"
            >
              connect@lumenoor.com
            </a>
          </div>
          {/* Website */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
            </svg>
            <a
              href="https://lumenoor.com"
              target="_blank"
              className="hover:underline"
            >
              lumenoor.com
            </a>
          </div>
        </div>

        {/* Divider under contact row */}
        <div className="mt-6 w-full">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500/80 to-transparent shadow-sm shadow-purple-500/20" />
        </div>

        {/* Bottom row: links left, copyright right */}
        <div className="mt-6 w-full flex flex-col-reverse sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4 text-foreground/70 text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-4 whitespace-nowrap overflow-x-auto w-full sm:w-auto justify-center sm:justify-start">
            {typeof window !== 'undefined' && window.location.pathname !== '/' && (
              <a href="/" className="hover:text-foreground">
                Home
              </a>
            )}
            <a href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-foreground">
              Terms Of Service
            </a>
          </div>
          <div className="opacity-80 sm:text-right w-full sm:w-auto text-center sm:text-right">
            © 2026 LumeNoor. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
