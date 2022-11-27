import React from 'react';
import logo from '../copystormlogo.png';
import { useScrollPosition } from './useScrollPosition.js';

function Header() {

    const scrollPosition = useScrollPosition();

    console.log(scrollPosition);
    return (
        <header class="header">
            <div class="header-group">
                <div class="solid-group">
                    <div class="nav-item">
                        <a href="/">
                            <img className='logoimg' width={150} height={25} src={logo} /><img />
                        </a>
                    </div>
                </div>
                <nav>
                    <ul class="nav">
                        <li class="nav-item">
                            <a href="#">
                                branding + strategy
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                work
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                about
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header