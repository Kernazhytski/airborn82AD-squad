import './App.css';
import styles from './App.module.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollableBackgroundImage from "./pages/components/scrollableBackgroundImage/ScrollableBackgroundImage";
import HomePage from "./pages/homePage/HomePage";
import Header from "./pages/components/header/Header";
import img from './assets/pictures/Yeho_ART.png'

function App() {


    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}/>
            <div className={styles.cameraContainer}>
                <Header/>
                <div className={styles.pagesCon}>
                    <Router>
                        <Routes>
                            <Route path="*" element={<HomePage/>}/>
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}


export default App;
