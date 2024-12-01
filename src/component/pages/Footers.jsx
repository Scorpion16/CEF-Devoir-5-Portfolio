import { Link } from "react-router-dom";

import "../css/style.css";
import "../css/footers.css";

const Footers = () => {
    return(
        <footer class="bg-dark text-light py-3 mt-5">
            <div class="container col-md-10">
                <div class="row mx-lg-5 mt-lg-4 px-lg-5 d-flex justify-content-evenly">
                    <section class="col-md-3">
                        <div>
                            <ul class="list-unstyled w-33">
                                <li>
                                    <h2 class="h4">John Doe</h2>
                                </li>
                                <li>
                                    <span>40 rue Laure Diebold</span>
                                </li>
                                <li >
                                    <span>69009 Lyon, France</span>
                                </li>
                                <li>
                                    <span>10 20 30 40 50</span>
                                </li>
                                <li>
                                    <span>john.doe@gmail.com</span>
                                </li>
                                <li>
                                    <ul class="list-inline list-unstyled mt-2">
                                        <li class="list-inline-item pe-1">
                                            <a href="https://github.com/">
                                                <img class="icon icon-color" src="../../../images/github.svg" alt="icone github"></img>
                                            </a>
                                        </li>
                                        <li class="list-inline-item px-1">
                                            <a href="https://x.com/">
                                                <img class="icon icon-color" src="../../../images/twitter_x.svg" alt="icone x"></img>
                                            </a>
                                        </li>
                                        <li class="list-inline-item ps-1">
                                            <a href="https://www.linkedin.com/">
                                                <img class="icon icon-color" src="../../../images/linkedin.svg" alt="icone linkedin"></img>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section class="col-md-3">
                        <div>
                            <ul class="list-unstyled w-33">
                                <li>
                                    <h2 class="h4">Liens utiles</h2>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/">Accueil</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Services">Services</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Contact">Contact</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Mentions">Mentions</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section class="col-md-3">
                        <div>
                            <ul class="list-unstyled w-33">
                                <li>
                                    <h2 class="h4 d-inline-flex">Mes dernières réalisations</h2>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Portfolio">Fresh Food</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Portfolio">Restaurant Akira</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Portfolio">Espace bien-être</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Portfolio">SEO</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Portfolio">Création d'una API</Link>
                                </li>
                                <li>
                                    <Link class="link-light text-decoration-none gras-link" to="/Portfolio">Maquette d'un site</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
}


export default Footers;