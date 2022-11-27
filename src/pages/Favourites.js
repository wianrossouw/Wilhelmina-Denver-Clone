import React from 'react';
import { Link } from 'react-router-dom'

function Favourites() {
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
            </head>
            <div class="pagemid">
                <p class="errortext1">You have not selected any favourites. Click the heart icon to add a model to favourites.</p>
            </div>

        </div>
    );
}

export default Favourites;