import React from 'react';
import AnimatedGradientButton from '../ui/animated-gradient-button';

const LoginButton = ({ isMobile = false, onClick }) => {
    return (
        <AnimatedGradientButton
            size={isMobile ? "mobile" : "default"}
            onClick={onClick}
            variant="primary"
            showArrow={true}
            arrowDirection="right"
        >
            Log In
        </AnimatedGradientButton>
    );
};

export default LoginButton;