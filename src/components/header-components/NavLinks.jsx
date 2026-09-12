import React from "react";
import Link from "next/link";

const NavLinks = ({
  isMobile = false,
  activeSection,
  handleSmoothScroll,
  navItems,
}) => {
  return (
    <>
      {navItems.map((item) => {
        const isActive = activeSection === item.href && activeSection !== null;
        // Use Link for internal routes, anchor for hash links
        const isInternal = item.href.startsWith("/");
        const linkProps = {
          className: isMobile
            ? `text-foreground/90 hover:text-foreground dark:text-white/90 dark:hover:text-white transition-colors duration-200 py-2 text-lg font-medium border-b border-foreground/10 dark:border-white/10 last:border-0${isActive ? " !text-xl !font-extrabold" : ""
            }`
            : `nav-link nav-txt w-nav-link text-[15px] xl:text-[16px] text-gray-800 hover:text-black dark:text-white/90 dark:hover:text-white transition-all duration-200 hover:scale-105 font-medium px-2 py-2 rounded-full${isActive ? " !text-xl !font-extrabold" : ""
            }`,
          style: { maxWidth: "1400px" },
        };
        if (isInternal) {
          return (
            <Link key={item.href} href={item.href} {...linkProps}>
              {item.label}
            </Link>
          );
        } else {
          return (
            <a
              key={item.href}
              href={item.href}
              {...linkProps}
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </a>
          );
        }
      })}
    </>
  );
};

export default NavLinks;
