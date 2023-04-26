import styles from './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollableBackgroundImage from "./pages/components/scrollableBackgroundImage/ScrollableBackgroundImage";
import HomePage from "./pages/homePage/HomePage";


function App() {


    return (
        <div className={styles.wrapper}>
            <ScrollableBackgroundImage imageUrl={"../../../pictures/background.png"}>
                <Router>
                    <Routes>
                        <Route path="*" element={<HomePage/>}/>
                    </Routes>
                </Router>
            </ScrollableBackgroundImage>
        </div>
    );
}


export default App;
