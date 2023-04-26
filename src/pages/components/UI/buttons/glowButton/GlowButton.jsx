import React, {useEffect} from 'react';
import styles from './GlowButton.module.css'

const GlowButton = ({children}) => {

    useEffect(()=> {
        console.log(children)},[])

    return (
        <div className={styles.button}>{children}</div>
    );
};

export default GlowButton;