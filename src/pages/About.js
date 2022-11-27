import React from 'react';
import { Link } from 'react-router-dom'
import img5 from '../005.jpg'
import img6 from '../006.jpg'
import img7 from '../007.jpg'
import img8 from '../008.jpg'


function About() {
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
            </head>
            <div class="pagemid">
                <h2 class="abouttitle">ABOUT</h2>
                <p class="abouttext1">Wilhelmina Denver is the largest, full service model, talent and artist agency, servicing the entire Rocky Mountain Region. Our commitment to service is unparalleled to both our clients and talent. Wilhelmina Denver focuses on providing opportunities in the Rocky Mountain Region as well as scouting, developing and managing models in major markets worldwide.
                    <br></br><br></br>
                    Wilhelmina Denver is the only U.S. based affiliate of Wilhelmina International (reference <span class="green">http://www.wilhelmina.com/page/affiliates</span>).
                    <br></br><br></br>
                    Employment or internship inquiries please email <span class="green">careers@wilhelminadenver.com</span>
                    <br></br><br></br>
                </p>
            </div>
            <div class="aboutpagemidmodels">
                <img class="modelimg5" src={img5} alt="model1" />
                <img class="modelimg6" src={img6} alt="model2" />
                <img class="modelimg7" src={img7} alt="model3" />
                <img class="modelimg8" src={img8} alt="model4" />
            </div>
        </div>
    );
}

export default About;