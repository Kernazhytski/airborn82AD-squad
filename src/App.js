import './App.css';
import styles from './App.module.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollableBackgroundImage from "./pages/components/scrollableBackgroundImage/ScrollableBackgroundImage";
import HomePage from "./pages/homePage/HomePage";
import Header from "./pages/components/header/Header";
import img from './assets/pictures/Yeho_ART.png'
import RulePage from "./pages/rulePage/RulePage";

function App() {


    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}/>
            <div className={styles.cameraContainer}>

                <Router>
                    <Header/>
                    <div className={styles.pagesCon}>
                        <Routes>
                            <Route path="*" element={<HomePage/>}/>
                            <Route path="/rules" element={<RulePage/>}/>
                        </Routes>
                    </div>
                </Router>

            </div>
        </div>
    )
        ;
}


export default App;
