import React, { useState } from 'react';
import { Button } from '@material-ui/core'
import Search from '../Search/Search.js'
import './Banner.css';

function Banner(){
    const [showSearch, setShowSearch] = useState(false);
    return(
        <div className="banner">
            <div className="banner_search">
                <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchButton" variant="outlined">{showSearch ? 'Hide' : 'Search Dates'}</Button>
                {showSearch && <Search />}
            </div>
           <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getway to uncover the hidden gems near you.</h5>
                <Button variant="outlined">Explore Nearby</Button>   
            </div> 
        </div>
    )
}

export default Banner;