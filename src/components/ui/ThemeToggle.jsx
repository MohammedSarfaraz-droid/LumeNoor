"use client";

import { useTheme } from '../ThemeProvider';
import { GlowingEffect } from './glowing-effect';

export const ThemeToggle = () => {
    const { theme, toggleTheme, mounted } = useTheme();

    // Show a placeholder during SSR/hydration
    if (!mounted) {
        return (
            <div className="relative group">
                <button
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-200"
                    aria-label="Toggle theme"
                    disabled
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div className="relative group">
            <GlowingEffect
                disabled={false}
                proximity={80}
                spread={25}
                blur={1.5}
                borderWidth={2}
                variant="default"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
            />
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 hover:bg-foreground/20 dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20 transition-all duration-200"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
            </button>
        </div>
    );
};
