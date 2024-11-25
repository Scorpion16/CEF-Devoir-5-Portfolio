
import "../css/mentions.css";

const Mentions = () => {
    return (
        <div>
            <main>
                <div class="d-flex flex-column align-items-center">
                    <h1 class="my-5 pb-4 border-bottom border-primary border-5">Mentions légales</h1>
                </div>
                <div class="accordion mx-auto col-md-8" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Editeur du site
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body d-flex flex-column">
                                <h3 class="h4">John Doe</h3>
                                <span>
                                    <img class="pe-2" src="../../../images/map_icon.svg" alt="icone de carte du pays" />
                                    40 rue Laure Diebold
                                </span>
                                <span>
                                    <img class="pe-2" src="../../../images/geo_loc.svg" alt="icone de localisation" />
                                    69009 Lyon, France
                                </span>
                                <span>
                                    <img class="pe-2" src="../../../images/phone.svg" alt="icone téléphone portable" />
                                    <a href="tel:1020304050" class="styleSuppr">10 20 30 40 50</a>
                                </span>
                                <span class="italique">
                                    <img class="pe-2" src="../../../images/email.svg" alt="icone de lettre avec un arobase" />
                                    <a href="mailto:john.doe@gmail.com" class="styleSuppr">john.doe@gmail.com</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body d-flex flex-column">
                                <h3 class="h4">alwaysdata</h3>
                                <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
                                <span>
                                    <a href="www.alwaysdata.com">
                                        <img class="pe-2" src="../../../images/globe.svg" alt="icone de planète quadrillé" />
                                        www.alwaysdata.com
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>
                                    <span>Ce site a été réalisé par John Doe, étudiant au </span>
                                    <a href="https://www.centre-europeen-formation.fr/" rel="noreferrer" target="_blank">Centre Européen de formation</a>
                                </p>
                                <p>
                                    <span class="italique">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site </span>
                                    <a href="https://pixabay.com/fr/" rel="noreferrer" target="_blank">Pixabay</a>
                                </p>
                                <p>
                                    <span>La favicon de ce site a été fournie par </span>
                                    <a href="https://www.flaticon.com/fr/" rel="noreferrer" target="_blank">John Doe Icons erstellt von Freepik - Flaticon</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}


export default Mentions;