import React from 'react';

const shineAnimation = {
    animation: 'shineAnimation 2.4s linear infinite',
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0) 100%)',
    borderRadius: '9999px',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
};

const BonusPill = ({ text = "ULTIMATE PROMPTBOOK & COMMUNITY ACCESS" }) => {
    return (
        <div className="relative inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-3 px-2 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-3 bg-[#040404] rounded-full border border-[rgba(230,193,90,0.35)] shadow-[inset_0_0_0_1px_rgba(255,230,150,0.12),0_10px_30px_rgba(0,0,0,0.45),0_2px_10px_rgba(230,193,90,0.06)] overflow-hidden isolate max-w-[95vw]">
            <span className="text-white font-extrabold tracking-wider uppercase text-[0.7rem] sm:text-[0.85rem] lg:text-[0.9rem] whitespace-normal sm:whitespace-nowrap break-words leading-[1.2] text-center">{text}</span>
            <div className="absolute inset-0 overflow-hidden z-0">
                <div
                    style={shineAnimation}
                    className="[transform:skew(-30deg,0deg)] [will-change:transform]"
                />
            </div>
            <style>{`
                @keyframes shineAnimation {
                    from { transform: translate3d(-200%,0,0) scale3d(1,1,1) skew(-30deg,0); }
                    to { transform: translate3d(400%,0,0) scale3d(1,1,1) skew(-30deg,0); }
                }
            `}</style>
        </div>
    );
};

export default BonusPill;