

const Services = () => {
    return(

        <div>
            <main>
                    <div class="col-4 mx-auto my-5 pb-4 border-bottom border-primary border-5 text-center">
                        <h1 class="">Mon offre de services</h1>
                        <span class="">Voici les prestations sur 
                            lesquelles je peux intervenir</span>
                    </div>
                <div>
                    <div class="container col-md-10">
                        <div class="row d-flex justify-content-center">
                            <section class="col-lg-3 my-2 mx-2 px-3 text-center border border-dark border-opacity-25 rounded-1">
                                <div>
                                    <img class="py-5" src="../../../images/icone_pinceau.svg" alt="icone de pinceau" />
                                    <h2 class="h5">UX Design</h2>
                                    <p>L'UX Design est une discipline 
                                        qui consiste à concevoir des 
                                        produits (sites web, 
                                        applications mobiles, logiciels, 
                                        objects connectés, ect.) en 
                                        plaçant l'utilisateur au centre 
                                        des préoccupations. L'objectif 
                                        est de rendre l'expérience 
                                        utilisateur la plus fluide et 
                                        agréable possible</p>
                                </div>
                            </section>
                            <section class="col-lg-3 my-2 mx-2 px-3 text-center border border-dark border-opacity-25 rounded-1">
                                <div>
                                    <img class="py-5" src="../../../images/icon_code.svg" alt="icone de balise html" />
                                    <h2 class="h5">Développement web</h2>
                                    <p>Le développement de sites web 
                                        consiste à créer des sites internet 
                                        en utilisant des langages de 
                                        programmation (HTML, CSS, JavaScript, 
                                        PHP, ect.) et des frameworks (Bootstrap, 
                                        React, Angular, ect.)
                                    </p>
                                </div>
                            </section>
                            <section class="col-lg-3 my-2 mx-2 px-3 text-center border border-dark border-opacity-25 rounded-1">
                                <div>
                                    <img class="py-5" src="../../../images/icone_loupe.svg" alt="icone de loupe" />
                                    <h2 class="h5">Référencement</h2>
                                    <p>Le référencement naturel (SEO) 
                                        est une technique qui consiste à 
                                        optimiser un site web pour le 
                                        faire remonter dans les résultats 
                                        des moteurs de recherche (Google, 
                                        Bing, Yahoo, ect.). L'objectif 
                                        est d'attirer un maximum de 
                                        visiteurs qualifiés sur le site</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}





export default Services;