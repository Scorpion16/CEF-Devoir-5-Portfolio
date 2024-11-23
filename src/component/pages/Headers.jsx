import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Mentions from "./Mentions";


function Headers() {

    return(
        <header>
            <nav class="navbar navbar-dark navbar-expand-lg bg-dark sticky-top"> 
                <span class="text-light text-uppercase px-5">John Doe</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 px-3">
                            <li class="nav-item">
                                <Link class="nav-link link-light text-uppercase" to="./Home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link link-light text-uppercase" to="./Services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link link-light text-uppercase" to="./Portfolio">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link link-light text-uppercase" to="./Contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link link-light text-uppercase" to="./Mentions">Mentions légales</Link>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </nav>
            <Routes>
                <Route path="./Home" element={<Home/>}></Route>
                <Route path="./Services" element={<Services/>}></Route>
                <Route path="./Portfolio" element={<Portfolio/>}></Route>
                <Route path="./Contact" element={<Contact/>}></Route>
                <Route path="./Mentions" element={<Mentions/>}></Route>
            </Routes>
        </header>
    );
} 





export default Headers;
