import React from 'react';
import styles from './BigPhoto.module.css'

const BigPhoto = ({active, setActive, imageURL}) => {

    const closePopup = () => {
        setActive(false)
    }

    return (
        <div className={styles.con}
             style={active ? {opacity: "1", pointerEvents: "all"} : {opacity: "0", pointerEvents: "none"}}
             onClick={closePopup}>
            <img src={imageURL} className={active ? styles.picOn : styles.picOff}
                 onClick={event => event.stopPropagation()} style={{width:"70%"}}/>
        </div>
    );
};

export default BigPhoto;