import React from "react";
import { motion } from "motion/react";
import LampEffect from "./HeaderLampEffect";
import NavLinks from "./NavLinks";

const DesktopNavigation = ({ activeSection, handleSmoothScroll, navItems }) => {
  return (
    <nav className="hidden lg:flex relative items-center justify-center">
      <LampEffect />

      {/* Navigation Links with upward animation */}
      <motion.div
        initial={{ opacity: 0.5, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-50 flex items-center space-x-4 xl:space-x-8 px-3 py-[6px] rounded-full ml-auto text-[#333] font-sans text-[14px] leading-5 box-border float-right backdrop-blur-lg bg-white/10 border border-[rgba(200,200,200,0.18)] shadow-[inset_0.1px_0.1px_2px_#ffffff80]"
      >
        <NavLinks
          activeSection={activeSection}
          handleSmoothScroll={handleSmoothScroll}
          navItems={navItems}
        />
      </motion.div>
    </nav>
  );
};

export default DesktopNavigation;
