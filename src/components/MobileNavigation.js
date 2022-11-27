import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import search from '../searchicon.svg';
import instagram from '../instagram.svg';
import facebook from '../facebook.svg';
import menu from '../menu.svg';
import logo from '../logo.svg';



function MobileNavigation() {
    return (
        <div class="transparent">
            <html>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                    <link href="./css/main.css" rel="stylesheet" />
                    <title>Document</title>
                </head>
                <header class="site-header">
                    <div class="wrapper site-header__wrapper">
                        <div>
                            <Link style={{ textDecoration: 'none' }} to='/'><a class="menuitem1">HOME</a></Link>
                            <Link style={{ textDecoration: 'none' }} to='w-studio'><a class="menuitem1">W STUDIO</a></Link>
                            <Link style={{ textDecoration: 'none' }} to='favourites'><a class="menuitem1">FAVOURITES</a></Link>
                            <Link style={{ textDecoration: 'none' }} to='join'><a class="menuitem1">JOIN</a></Link>
                            <Link style={{ textDecoration: 'none' }} to='about'><a class="menuitem1">ABOUT</a></Link>
                            <Link style={{ textDecoration: 'none' }} to='contact'><a class="menuitem1">CONTACT</a></Link>
                        </div>
                        <nav class="nav"></nav>
                        <div class="wrapper site-header__wrapper2">
                            <a href="https://www.instagram.com/wilhelminadenver/" target="_blank" class="iconwrapper"><img class="instaicon" src={instagram} alt="instagram" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100063848280997" target="_blank" class="iconwrapper"><img class="facebookicon" src={facebook} alt="facebook" /></a>
                            <a href="#" class="iconwrapper"><img class="menuicon" src={menu} alt="menu" /></a>
                        </div>
                    </div>
                </header>
            </html>
        </div>

    )
}

export default MobileNavigation