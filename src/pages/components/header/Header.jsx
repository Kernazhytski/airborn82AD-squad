import React from 'react';
import styles from './Header.module.css'
import logo from '../../../assets/pictures/logo.png'
import HeaderButton from "../UI/buttons/headerButton/HeaderButton";

const Header = () => {
    return (
        <div className={styles.con}>
            <div className={styles.header}>
                <div className={styles.conLogo}>
                    <img src={logo} className={styles.logo}></img>
                    <div className={styles.textCon}>
                        <p className={styles.textLogo}>82ND AIRBORNE DIVISION</p>
                    </div>
                </div>
                <div className={styles.conButtons}>
                    <HeaderButton url={""}>HOME</HeaderButton>
                    <HeaderButton url={"rules"}>RULES</HeaderButton>
                    <HeaderButton url={"structure"}>STRUCTURE</HeaderButton>
                    <HeaderButton url={"donate"}>DONATE</HeaderButton>
                    <HeaderButton url={"contacts"}>CONTACTS</HeaderButton>
                </div>

            </div>
        </div>
    );
};

export default Header;