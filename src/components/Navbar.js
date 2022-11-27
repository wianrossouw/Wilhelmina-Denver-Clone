import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import search from '../searchicon.svg';
import instagram from '../instagram.svg';
import facebook from '../facebook.svg';
import menu from '../menu.svg';
import logo from '../logo.svg';
import { CSSTransition } from 'react-transition-group';
import { Transition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';

function Navbar() {
    const [show, setShow] = useState(false);



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
                        <nav class="nav">
                            {show && <ul class="" >
                                <li onClick={() => setShow(!show)}><Link style={{ textDecoration: 'none' }} to='/'><a class="mobilenavitems1">HOME</a></Link></li>
                                <li onClick={() => setShow(!show)}><Link style={{ textDecoration: 'none' }} to='w-studio'><a class="mobilenavitems2">W STUDIO</a></Link></li>
                                <li onClick={() => setShow(!show)}><Link style={{ textDecoration: 'none' }} to='favourites'><a class="mobilenavitems3">FAVOURITES</a></Link></li>
                                <li onClick={() => setShow(!show)}><Link style={{ textDecoration: 'none' }} to='join'><a class="mobilenavitems4">JOIN</a></Link></li>
                                <li onClick={() => setShow(!show)}><Link style={{ textDecoration: 'none' }} to='about'><a class="mobilenavitems5">ABOUT</a></Link></li>
                                <li onClick={() => setShow(!show)}><Link style={{ textDecoration: 'none' }} to='contact'><a class="mobilenavitems6">CONTACT</a></Link></li>
                            </ul>}
                        </nav>
                        {
                            show && <div class="mobilenavblock">
                            </div>
                        }

                        <div class="wrapper site-header__wrapper2">
                            <a href="https://www.instagram.com/wilhelminadenver/" target="_blank" class="iconwrapper"><img class="instaicon" src={instagram} alt="instagram" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100063848280997" target="_blank" class="iconwrapper"><img class="facebookicon" src={facebook} alt="facebook" /></a>
                            <a href="#" class="iconwrapper"><img class="menuicon" src={menu} alt="menu" onClick={() => setShow(!show)} /></a>
                        </div>
                    </div>
                </header>
            </html>
        </div>

    )
}

export default Navbar