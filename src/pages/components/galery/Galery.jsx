import React from 'react';
import styles from './Galery.module.css';
import CarouselGalery from "../UI/carousel/carouselGalery/CarouselGalery";
import galeryArray from './GaleryPhotos'

const Galery = () => {
    return (
        <div className={styles.con}>
            <CarouselGalery images={galeryArray} height={"200px"}/>
        </div>
    );
};

export default Galery;