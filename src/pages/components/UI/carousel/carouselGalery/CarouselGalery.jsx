import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './carousel.module.css';
import './carousel.module.css';
import knopka1 from './strelka.png';

import knopka2 from './strelka2.png'
import {CSSTransition} from 'react-transition-group';


const CarouselGalery = ({images, height}) => {

    const [center, setCenter] = useState(1);
    const [opacity, setOpacity] = useState(1);


    const buttonLeft = () => {
        if (center === 0) {
            setOpacity(0.1);
            setTimeout(() => {
                setCenter(images.length - 1)
                setOpacity(1);
            }, 280);
        } else {
            setOpacity(0.1);
            setTimeout(() => {
                setCenter(center - 1);
                setOpacity(1);
            }, 280);
        }

    }

    const buttonRight = () => {
        if (center === images.length - 1) {
            setOpacity(0.1);
            setTimeout(() => {
                setCenter(0);
                setOpacity(1);
            }, 280);
        } else {
            setOpacity(0.1);
            setTimeout(() => {
                setCenter(center + 1);
                setOpacity(1);
            }, 280);
        }
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Добавляем слушатель события изменения размера окна
        window.addEventListener('resize', handleResize);

        // Удаляем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <img src={knopka2} onClick={buttonLeft} className={styles.knopka}  />
            {
                windowWidth>425&&
            <img src={images[center === 0 ? images.length - 1 : center - 1].url} className={styles.images}
                 style={{opacity: opacity,display:windowWidth>425?"block":"none"}}/>
            }
            <img src={images[center].url} className={styles.images} style={{opacity: opacity}}/>
            {
                windowWidth>425&&
            <img src={images[center === images.length - 1 ? 0 : center + 1].url} className={styles.images}
                 style={{opacity: opacity,display:windowWidth>425?"block":"none"}}/>
            }
                <img src={knopka1} onClick={buttonRight} className={styles.knopka} />
        </div>
    );
};

export default CarouselGalery;