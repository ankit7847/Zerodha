import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom bg-light"  >
            <div class="container p-2">
                < Link class="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="logo" style={{width: "25%"}} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-lg-0">
                        <li class="nav-item">
                            < Link class="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/About ">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/Product">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/Pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/Support">Support</Link>
                        </li>
                       
                      
                       
                    </ul>
                   
                </div>
            </div>
        </nav>

    );
}

export default Navbar;