import React, { useEffect } from 'react';
import styles from './ScrollBackground.module.css'

const ScrollableBackgroundImage = ({ imageUrl,children }) => {
    useEffect(() => {

        console.log(window.scrollY)
        console.log(document.documentElement.scrollHeight)
        console.log(document.documentElement.clientHeight)

        const handleScroll = () => {


            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const positionY = scrollPercent * 100;
            const container = document.getElementById('image-container');
            container.style.backgroundPositionY = `${positionY}%`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="image-container"  className={styles.con}>
            {children}
        </div>
    );
};

export default ScrollableBackgroundImage;