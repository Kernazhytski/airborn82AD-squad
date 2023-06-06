import React, {useState} from 'react';
import styles from './HeaderBurger.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderBurger = () => {

    const [active, setActive] = useState(false);
    const location = "/"+useLocation().pathname.split('/').reverse()[0];

    const press = (e) => {
        setActive(!active);
    }



    return (
        <div>
            <div className={styles.hamburgerLines} onClick={press}>
                <div className={styles.line} style={{transform: active ? "rotate(43deg) " : "rotate(0)"}}></div>
                <div className={styles.line} style={{opacity: active ? "0" : "1"}}></div>
                <div className={styles.line} style={{transform: active ? "rotate(-43deg) " : "rotate(0)"}}></div>
            </div>
            <div className={styles.con} style={{display: active ? "flex" : "none"}}>
                <ul className={styles.linkUnstyled}>
                    {
                        location === '/'
                            ?
                            <li className={styles.item}>
                                <Link style={{color:"red"}} to={'/'} >HOME</Link>
                            </li>
                            :
                            <li className={styles.item}>
                                <Link to={'/'} >HOME</Link>
                            </li>
                    }
                    {
                        location === '/rules'
                            ?
                            <li  className={styles.item}>
                                <Link style={{color:"red"}} to={'/rules'} >RULES</Link>
                            </li>
                            :
                            <li className={styles.item}>
                                <Link to={'/rules'} >RULES</Link>
                            </li>
                    }
                    {
                        location === '/structure'
                            ?
                            <li  className={styles.item}>
                                <Link style={{color:"red"}} to={'/structure'} >STRUCTURE</Link>
                            </li>
                            :
                            <li className={styles.item}>
                                <Link to={'/structure'} >STRUCTURE</Link>
                            </li>
                    }
                    {
                        location === '/donate'
                            ?
                            <li  className={styles.item}>
                                <Link style={{color:"red"}} to={'/donate'} >DONATE</Link>
                            </li>
                            :
                            <li className={styles.item}>
                                <Link to={'/donate'} >DONATE</Link>
                            </li>
                    }
                    {
                        location === '/contacts'
                            ?
                            <li className={styles.item}>
                                <Link style={{color:"red"}} to={'/contacts'} >CONTACTS</Link>
                            </li>
                            :
                            <li className={styles.item}>
                                <Link to={'/contacts'} >CONTACTS</Link>
                            </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default HeaderBurger;