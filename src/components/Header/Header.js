import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language'
import { ExpandMore } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <Link to="/">
            <img className="header_icon" src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" />
            </Link>
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMore />
                <Avatar />
            </div>
        </div>   
    )
}

export default Header;