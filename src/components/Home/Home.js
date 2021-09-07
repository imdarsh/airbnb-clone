import React from 'react';
import Banner from '../Banner/Banner.js';
import './Home.css';
import Card from '../Card/Card.js'

function Home() {
    return(
    <div className="home">
        <Banner />
        <div className="home_section">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}

export default Home;