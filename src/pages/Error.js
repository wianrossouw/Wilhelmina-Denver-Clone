import React from 'react';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
            </head>
            <div class="pagemid">
                <p class="errortext1">Seems like this page does not exist.</p>
                <Link to="/"><a class="errortext2">BACK TO HOME</a></Link>
            </div>

        </div>
    );
}

export default Error;