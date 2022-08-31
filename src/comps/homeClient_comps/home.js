import React from 'react';
import HomeStrip from './homeStrip'
import MainHome from './mainHome'
import MapHome from './mapHome'
import About from './about'
import Youtube from './youtube'
import "../../comps/css/home.css"
import TowBox from './towBox';


function Home(props) {

    return (
        <React.Fragment>
            <HomeStrip />
            <MainHome />
            <TowBox />
            <About />
            <Youtube />

            <MapHome />

        </React.Fragment>


    )
}

export default Home