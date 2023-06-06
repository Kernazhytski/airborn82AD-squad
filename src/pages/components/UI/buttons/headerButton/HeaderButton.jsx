import React, {useEffect} from 'react';
import styles from './HeaderButton.module.css'
import {useLocation, useNavigate} from 'react-router-dom'

const HeaderButton = ({url, children}) => {

    const currentUrl = "/" + useLocation().pathname.split('/').reverse()[0];
    const loc = useNavigate();

    const ButtonOnClick = () => {
        loc(url)
    }

    return (
        <div className={styles.con}>
            <p className={styles.button} style={{color: currentUrl === url ? "red" : "white"}}
               onClick={ButtonOnClick}>{children}</p>
        </div>
    );
};

export default HeaderButton;