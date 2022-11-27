import React from 'react';
import { Link } from 'react-router-dom'
import wstudioimg from '../logo-wstudio.svg'

function Wstudio() {
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
            </head>
            <div class="pagemid">
                <img class="wstudioimg" src={wstudioimg} alt="wstudio" />
                <h2 class="wstudiotitle"> W Studio</h2>
                <p class="wstudiotop">W Studio is a versatile photo studio in Denver ideal for photo and video production rentals. It is fully equipped with a cove cyclorama wall for rent (W-19’.5” D-13’.5” H- 11’.5”) with overhead production space lighting including six 32” diameter space lights each with four, 120V, 5600K LED bulbs. W Studio is 1500 sq. ft. of open-air construction space with 15-ft. ceilings and beautiful natural light throughout. The photography studio can easily be transformed and utilized for most production needs with finished concrete floors and minimalist décor. Being the best hourly photography studio rental in Denver, W Studio offers half-day and full-day rates, as well as local resource recommendations for equipment, lighting and other production support. W Studio’s shared location inside Wilhelmina Denver works as an amazing space for casting as well as full talent and artist sourcing, and production/photography recommendations.</p>
                <p class="wstudiotop">W Studio is a versatile photo studio in Denver ideal for photo and video production rentals. It is fully equipped with a cove cyclorama wall for rent (W-19’.5” D-13’.5” H- 11’.5”) with overhead production space lighting including six 32” diameter space lights each with four, 120V, 5600K LED bulbs. W Studio is 1500 sq. ft. of open-air construction space with 15-ft. ceilings and beautiful natural light throughout. The photography studio can easily be transformed and utilized for most production needs with finished concrete floors and minimalist décor. Being the best hourly photography studio rental in Denver, W Studio offers half-day and full-day rates, as well as local resource recommendations for equipment, lighting and other production support. W Studio’s shared location inside Wilhelmina Denver works as an amazing space for casting as well as full talent and artist sourcing, and production/photography recommendations.</p>
            </div>

        </div>
    );
}

export default Wstudio;