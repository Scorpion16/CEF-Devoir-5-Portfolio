import { Routes, Route, Link } from "react-router-dom";

import "../css/footers.css";
import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Mentions from "./Mentions";


function Footers() {
    return(
        <footer class="bg-dark text-light fixed-bottom">
            <div class="container">
                <div class="row mx-5 my-4 px-5">
                    <div class="col-md-4">
                        <ul class="list-unstyled w-33">
                            <li>
                                <h4>John Doe</h4>
                            </li>
                            <li>
                                <p>40 rue Laure Diebold</p>
                            </li>
                            <li >
                                <p>69009 Lyon, France</p>
                            </li>
                            <li>
                                <p>10 20 30 40 50</p>
                            </li>
                            <li>
                                <p>john.doe@gmail.com</p>
                            </li>
                            <li>
                                <ul class="list-inline list-unstyled">
                                    <li class="list-inline-item pe-1">
                                        <a href="https://github.com/">
                                            <img class="icon" src="../../../images/github.svg" alt="icone github"></img>
                                        </a>
                                    </li>
                                    <li class="list-inline-item px-1">
                                        <a href="https://x.com/">
                                            <img class="icon" src="../../../images/twitter_x.svg" alt="icone x"></img>
                                        </a>
                                    </li>
                                    <li class="list-inline-item ps-1">
                                        <a href="https://www.linkedin.com/">
                                            <img class="icon" src="../../../images/linkedin.svg" alt="icone linkedin"></img>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-unstyled w-33">
                            <li>
                                <h4>Liens utiles</h4>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Home">Accueil</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Services">Services</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Contact">Contact</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Mentions">Mentions</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-unstyled w-33">
                            <li>
                                <h4 class="d-inline-flex">Mes dernières réalisations</h4>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Portfolio">Fresh Food</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Portfolio">Restaurant Akira</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Portfolio">Espace bien-être</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Portfolio">SEO</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Portfolio">Création d'una API</Link>
                            </li>
                            <li>
                                <Link class="link-light text-decoration-none" to="./Portfolio">Maquette d'un site</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="./" element={<Home/>}></Route>
                <Route path="./Services" element={<Services/>}></Route>
                <Route path="./Portfolio" element={<Portfolio/>}></Route>
                <Route path="./Contact" element={<Contact/>}></Route>
                <Route path="./Mentions" element={<Mentions/>}></Route>
            </Routes>
        </footer>
    );
}


export default Footers;