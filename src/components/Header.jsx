"use client";
import React, { useState, useEffect } from 'react';
import Logo from './header-components/Logo';
import DesktopNavigation from './header-components/DesktopNavigation';
import DesktopControls from './header-components/DesktopControls';
import MobileControls from './header-components/MobileControls';
import MobileMenu from './header-components/MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleHeaderScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleHeaderScroll, { passive: true });
        handleHeaderScroll();

        return () => window.removeEventListener('scroll', handleHeaderScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Smooth scroll to section
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        // Close mobile menu if open
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    // Detect if current page is home
    const [isHome, setIsHome] = useState(true);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsHome(window.location.pathname === '/');
        }
    }, []);

    // Navigation items data
    const navItems = isHome
        ? [
            { href: "#features", label: "Features" },
            { href: "#pricing", label: "Pricing" },
            { href: "#faqs", label: "FAQs" },
            { href: "#contact", label: "Contact" }
        ]
        : [
            { href: "/", label: "Home" }
        ];

    // Track active section for nav highlighting (only for home)
    const [activeSection, setActiveSection] = useState(isHome ? navItems[0].href : "/");

    useEffect(() => {
        if (!isHome) return;
        const handleScroll = () => {
            let found = null;
            const viewportHeight = window.innerHeight;

            // Check scroll position - if user scrolled to bottom of page, highlight last item
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
                found = navItems[navItems.length - 1].href;
            } else {
                for (const item of navItems) {
                    const el = document.querySelector(item.href);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        // Element is active if top is near header threshold or occupies significant middle viewport
                        if (rect.top <= 250 && rect.bottom >= 150) {
                            found = item.href;
                            break;
                        }
                    }
                }
            }
            if (found) {
                setActiveSection(found);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                    ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
                    : "bg-transparent border-b border-transparent"
            } text-foreground`}
        >
            <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3">
                <div className="relative flex items-center justify-between w-full min-h-[50px] sm:min-h-[60px]">
                    {/* Left Corner: Logo */}
                    <div className="flex items-center justify-start flex-shrink-0 z-20">
                        <Logo />
                    </div>

                    {/* Center: Desktop Navigation Hub (Hidden on mobile) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto items-center justify-center">
                        <DesktopNavigation
                            activeSection={activeSection}
                            handleSmoothScroll={handleSmoothScroll}
                            navItems={navItems}
                        />
                    </div>

                    {/* Right Corner: Controls */}
                    <div className="flex items-center justify-end flex-shrink-0 z-20 gap-2 sm:gap-3">
                        <DesktopControls />
                        <MobileControls
                            isMobileMenuOpen={isMobileMenuOpen}
                            toggleMobileMenu={toggleMobileMenu}
                        />
                    </div>
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    activeSection={activeSection}
                    handleSmoothScroll={handleSmoothScroll}
                    navItems={navItems}
                />
            </div>
        </header>
    );
};

export default Header;