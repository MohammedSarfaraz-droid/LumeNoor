import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "../ThemeProvider";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0.3, x: -120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex items-center flex-shrink-0 cursor-pointer"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
      }}
      title="LumeNoor Home"
    >
      <Image
        src={
          theme === "light"
            ? "/Images/logo-black.png"
            : "/Images/logo-white.png"
        }
        alt="LumeNoor Logo"
        width={320}
        height={85}
        priority
        className="w-36 xs:w-44 sm:w-52 md:w-60 lg:w-64 xl:w-72 h-auto object-contain transition-transform hover:scale-[1.02]"
      />
    </motion.div>
  );
};

export default Logo;

