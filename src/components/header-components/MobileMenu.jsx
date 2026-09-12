import React from 'react';
import NavLinks from './NavLinks';

const MobileMenu = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeSection,
    handleSmoothScroll,
    navItems
}) => {
    if (!isMobileMenuOpen) return null;

    return (
        <>
            {/* Mobile Menu Backdrop */}
            <div
                className="lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/40"
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className="lg:hidden absolute top-full left-0 right-0 z-50 mt-2 px-3 xs:px-4 sm:px-6">
                <div className="bg-foreground/10 backdrop-blur-md border border-foreground/20 dark:bg-white/10 dark:border-white/20 rounded-2xl p-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-4">
                        <NavLinks
                            isMobile={true}
                            activeSection={activeSection}
                            handleSmoothScroll={handleSmoothScroll}
                            navItems={navItems}
                        />
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;