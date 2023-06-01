import React, {useState} from 'react';
import styles from './style.module.css'
import imeg from '../../../assets/pictures/logo.png'
import GlowButton from "../UI/buttons/glowButton/GlowButton";

const HoverImageLabel = ({imgUrl, title, description}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    //<img alt={title} className={isHovered ? styles.hovered : styles.notHovered} src={imeg}/>
    return (

        <div className={styles.kek} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.con}>
                <img alt={title} className={styles.imeg} src={imeg}/>
                <div className={styles.hoverableText}>
                    <p style={{whiteSpace:"pre"}} className={styles.titleText}>{title}</p>
                    <p style={{whiteSpace:"pre"}} className={styles.descText}>{description}</p>
                </div>
            </div>
            <GlowButton isHovered={isHovered}>Join Discord</GlowButton>
        </div>
    );
};

export default HoverImageLabel;