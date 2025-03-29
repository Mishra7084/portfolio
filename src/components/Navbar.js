import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg sticky-top " >
            <div class="container p-3">
                <Link  to = "/"class="navbar-brand">
                Portfolio
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item  ">
                            <Link to="/about" class="nav-link active" style={{color:"#fff"}}>About</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="/skills" class="nav-link active" aria-disabled="true" style={{color:"#fff"}}>Skills</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/projects" class="nav-link active" aria-disabled="true" style={{color:"#fff"}}>Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link active" aria-disabled="true" style={{color:"#fff"}}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
