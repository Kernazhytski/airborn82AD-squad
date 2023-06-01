import React, {useEffect} from 'react';
import styles from './GlowButton.module.css'
import {Link} from "react-router-dom";

const GlowButton = ({children, isHovered}) => {

    function handleClick() {
        window.location.href = "https://discord.gg/ys4NP5sgw3";
    }

    return (

            <div className={styles.button} onClick={handleClick}
                 style={isHovered ? {
                     transform: "translateY(50px)",
                     opacity: "1"
                 } : {
                     transform: "translateY(0px)"
                 }}>
                <span>{children}</span>
            </div>

    );
};

export default GlowButton;