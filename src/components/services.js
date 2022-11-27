import React from 'react'
import form from './form'
import WebsiteContentCopywriting from '../WebsiteContentCopywriting.jpg';

function Services() {
    return (
        <div class="content-width">
            <div class="hero hero-grid grid-3-2 align-center-d overlap-m">
                <div class="left">
                    <span class="medium-copy tight-spacing">Our Services</span>
                    <img className='logoimg' width={400} src={WebsiteContentCopywriting} /><img />
                </div>
            </div>
        </div >

    )
}

export default Services