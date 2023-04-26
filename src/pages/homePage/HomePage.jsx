import React from 'react';
import HoverImageLabel from "../components/hoverImageLabel/HoverImageLabel";

const HomePage = () => {
    return (
        <div>
            <HoverImageLabel imgUrl={"../../../pictures/logo.png"} description={"Присоединяйся к нам!"}
                             title={"82 Airborn Division"}/>

        </div>
    );
};

export default HomePage;