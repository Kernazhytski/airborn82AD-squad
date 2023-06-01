import React, {useEffect} from 'react';
import styles from './HeaderButton.module.css'

const HeaderButton = ({url,children}) => {

    const currentUrl = window.location.href.split('/').reverse()[0];

    useEffect(()=>{
        console.log(currentUrl)
    },[])

    return (
        <div className={styles.con}>
            <p className={styles.button} style={{color:currentUrl===url?"red":"white"}}>{children}</p>
        </div >
    );
};

export default HeaderButton;