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
                <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
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