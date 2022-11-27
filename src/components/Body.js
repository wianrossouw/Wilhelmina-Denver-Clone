import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import search from '../searchicon.svg';
import instagram from '../instagram.svg';
import facebook from '../facebook.svg';
import menu from '../menu.svg';
import logo from '../logo.svg';



function Body() {
    return (
        <div class="homepagebg">
            <html>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                    <link href="./css/main.css" rel="stylesheet" />
                    <title>Document</title>
                </head>
                <img class="logocenter" src={logo} alt="facebook" />
            </html>
        </div>

    )
}

export default Body