import React from 'react';
import HoverImageLabel from "../components/hoverImageLabel/HoverImageLabel";
import Galery from "../components/galery/Galery";
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={styles.con}>
            <div className={styles.firstView}>
                <div className={styles.videoCon}>

                </div>
                <div className={styles.discordCon}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ykOEOoBVqc4?autoplay=1"
                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div className={styles.con2}>
                        <div className={styles.discordBut}/>
                    </div>
                </div>
            </div>
            <Galery/>
        </div>
    );
};

//<p className={styles.text} style={{fontSize:"70px"}}>82AD TRAILER</p>
//<HoverImageLabel imgUrl={"../../../pictures/logo.png"} description={'WE NEED YOU!   JOIN NOW!'}
//                title={"82nd AIRBORNE DIVISION"}/>
export default HomePage;