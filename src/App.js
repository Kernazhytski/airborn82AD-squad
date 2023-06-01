import './App.css';
import styles from './App.module.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollableBackgroundImage from "./pages/components/scrollableBackgroundImage/ScrollableBackgroundImage";
import HomePage from "./pages/homePage/HomePage";
import Header from "./pages/components/header/Header";


function App() {


    return (
        <div>
            <ScrollableBackgroundImage>
                    <Header/>
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
