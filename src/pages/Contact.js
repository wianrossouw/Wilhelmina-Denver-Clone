import React from 'react';
import { Link } from 'react-router-dom'
import img5 from '../005.jpg'
import img6 from '../006.jpg'
import img7 from '../007.jpg'
import img8 from '../008.jpg'


function Contact() {
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
                <link href="./css/main.css" rel="stylesheet" />
                <title>Document</title>
            </head>
            <div class="pagemid">
                <h2 class="abouttitle">CONTACT</h2>
                <p class="contacttext1">Wilhelmina Denver
                    <br></br>
                    209 Kalamath Street #10
                    <br></br>
                    Denver, CO 80223
                    <br></br>
                    Main <span class="green">720-382-1512</span>
                    <br></br><br></br>This is NOT the submission page for models/actors.<br></br>Please <Link to="join"><a class="green">click here</a></Link> for the submission page.<br></br><br></br>The below area is for booking inquires only.
                </p>
                <div class="rendered-form">
                    <div class="formbuilder-text form-group field-text-1669566964825">
                        <label for="text-1669566964825" class="formbuilder-text-label">Name</label>
                        <input type="text" class="form-control" name="text-1669566964825" access="false" id="text-1669566964825"></input>
                    </div>
                    <div class="formbuilder-text form-group field-text-1669566969820">
                        <label for="text-1669566969820" class="formbuilder-text-label">Email</label>
                        <input type="text" class="form-control" name="text-1669566969820" access="false" id="text-1669566969820"></input>
                    </div>
                    <div class="formbuilder-text form-group field-text-1669566978707">
                        <label for="text-1669566978707" class="formbuilder-text-label">Phone</label>
                        <input type="text" class="form-control" name="text-1669566978707" access="false" id="text-1669566978707"></input>
                    </div>
                    <div class="formbuilder-textarea form-group field-textarea-1669566980269">
                        <label for="textarea-1669566980269" class="formbuilder-textarea-label">Message
                            <br></br>
                        </label>
                        <textarea type="textarea" class="form-control" name="textarea-1669566980269" access="false" id="textarea-1669566980269"></textarea>
                        <Link to="/"><a class="submitbutton">SUBMIT</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;