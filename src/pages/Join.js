import React from 'react';
import { Link } from 'react-router-dom'
import img1 from '../001.jpg'
import img2 from '../002.jpg'
import img3 from '../003.jpg'
import img4 from '../004.jpg'


function Join() {
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
            </head>
            <div class="pagemidmodels">
                <img class="modelimg1" src={img1} alt="model1" />
                <img class="modelimg2" src={img2} alt="model2" />
                <img class="modelimg3" src={img3} alt="model3" />
                <img class="modelimg4" src={img4} alt="model4" />
            </div>
            <div class="pagemid">
                <p class="jointext1">Please contact the email below and upload images to be considered by our team at Wilhelmina Denver. Once completed our New Faces team will reach out to arrange an appointment if you meet our criteria.
                    <br></br><br></br>
                    We require all potential models and talent to visit our office for an in-person meeting or be available to conduct a remote digital meeting (if outside the state of Colorado) to be considered for representation.
                    <br></br><br></br>
                    We do not take walk-in appts, hold open calls or see anyone without an appt.
                    <br></br><br></br>
                    If you are a developed Actor, please send a RECENT headshot and resume to our On-Camera Director to schedule an audition <span class="green">cassie@wilhelminadenver.com.</span></p>
                <br></br><br></br>
                <br></br><br></br>
            </div>
        </div>
    );
}

export default Join;