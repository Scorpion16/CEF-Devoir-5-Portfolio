import { useEffect, useState } from "react";

import "../css/style.css";
import "../css/home.css";


const Home = () => {
    
    const [me, setMe] = useState([]);

    const getMe = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setMe(json);
    }

    useEffect(() => {
        getMe();
    })

    return(
        <div>
            <main>
                <section class="position-relative">
                    <img src="../../../images/hero-bg.jpg" class="img-fluid h-auto" alt="Un développeur de dos devant son écran en train de coder"></img>
                    <div class="text-center text-light align-middle position-absolute top-50 start-50 translate-middle">
                        <h1 class="h1 mb-3">Bonjour, je suis John Doe</h1>
                        <h2 class="h3 mb-3">Développeur web full stack</h2>
                        <bouton type="button" data-bs-toggle="modal" data-bs-target="#modaleMe" class="btn btn-danger bouton-style">
                            En savoir plus
                        </bouton>
                    </div>
                </section>
                {/*La partie de la modale*/}
                <section>
                    <div class="modal fade" id="modaleMe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog  modal-lg">
                            <div class="modal-content bg-dark text-light">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Mon profil GitHub</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <img src={me.avatar_url} class="img-fluid" alt="personnage doraemon vue de face"></img>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="my-3 pb-2 border-bottom border-light-subtle border-1">
                                                    <a href={me.html_url} target="_blank" rel="noreferrer">
                                                        <img class="pe-2" src="../../../images/person.svg" alt="icone de personne"></img>
                                                        {me.name}
                                                    </a>
                                                </div>
                                                <div class="my-3 pb-2 border-bottom border-light-subtle border-1">
                                                    <p>
                                                        <img class="pe-2" src="../../../images/geo_loc_white.svg" alt="icone de localisation"></img>
                                                        {me.location}
                                                    </p>
                                                </div>
                                                <div class="my-3 pb-2 border-bottom border-light-subtle border-1">
                                                    <p>
                                                        <img class="pe-2" src="../../../images/card_text.svg" alt="icone de carte avec du texte"></img>
                                                        {me.bio}
                                                    </p>
                                                </div>
                                                <div class="my-3 pb-2 border-bottom border-light-subtle border-1">
                                                    <p>
                                                        <img class="pe-2" src="../../../images/repository.svg" alt="icone de cube"></img>
                                                        Repositories : {me.public_repos}
                                                    </p>
                                                </div>
                                                <div class="my-3 pb-2 border-bottom border-light-subtle border-1">
                                                    <p>
                                                        <img class="pe-2" src="../../../images/follow.svg" alt="icone de deux personnes cotes a cotes"></img>
                                                        Followers : {me.followers}
                                                    </p>
                                                </div>
                                                <div class="my-3">
                                                    <p>
                                                        <img class="pe-2" src="../../../images/follow.svg" alt="icone de deux personnes cotes a cotes"></img>
                                                        Following : {me.following}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Corps de la page*/}
                <div class="container col-md-8">
                    <div class="row">
                        <section class="col-lg-6">
                            <div>
                                <h3 class="h4 mt-5 pb-2 border-bottom border-primary border-3">A propos</h3>
                                <img src="../../../images/john-doe-about.jpg" class="img-fluid mt-4" alt="Une personne de profil"></img>
                                <p><small>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book.
                                </small></p>
                                <p><small>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book.
                                </small></p>
                                <p><small>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book.
                                </small></p>
                            </div>
                        </section>
                        <section class="col-lg-6">
                            <div>
                                <h3 class="h4 mt-5 pb-2 border-bottom border-primary border-3">Mes compétences</h3>
                                <div>
                                    <div class="mt-4">
                                        <p class="mb-1 text-uppercase">Html5 90%</p>
                                        <div class="mb-3 progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-danger" style={{width: "90%"}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="mb-1 text-uppercase">Css3 80%</p>
                                        <div class="mb-3 progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-info" style={{width: "80%"}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="mb-1 text-uppercase">Javascript 70%</p>
                                        <div class="mb-3 progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-warning" style={{width: "70%"}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="mb-1 text-uppercase">Php 60%</p>
                                        <div class="mb-3 progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-success" style={{width: "60%"}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="mb-1 text-uppercase">React 50%</p>
                                        <div class="mb-3 progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar bg-primary" style={{width: "50%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}





export default Home;
