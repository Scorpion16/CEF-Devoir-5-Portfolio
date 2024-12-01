import { Link } from "react-router-dom";

import "../css/style.css";
import "../css/card.css";

const Portfolio = () => {
    return(
        <div>
            <main>
                <div>
                    <img src="../../../images/banner.jpg" class="img-fluid" alt="Lumière bleu avec un faisceau qui traverse de droite à gauche"></img>
                    <div class="col-8 col-md-3 mx-auto my-5 pb-4 border-bottom border-primary border-5 text-center">
                        <h1>Portfolio</h1>
                        <span>Voici quelques-unes de mes réalisations</span>
                    </div>
                    <div class="container col-md-8">
                        <div class="row">
                            <section class="col-12 col-md-6 col-lg-4">
                                <div class="card mx-2 my-2 modif-card">
                                    <img src="../../../images/fresh-food.jpg" class="card-img-top" alt="Une caisse de légumes"></img>
                                    <div class="card-body text-center">
                                        <h2 class="h5 card-title">Fresh Food</h2>
                                        <p class="card-text"><small>Site de vente de produits frais en ligne</small></p>
                                        <Link to="/Portfolio" class="btn btn-primary">Voir le site</Link>
                                    </div>
                                    <span class="border-top text-center bg-dark bg-opacity-10 py-2"><small>Site réalisé avec PHP et MySQL</small></span>
                                </div>
                            </section>
                            <section class="col-12 col-md-6 col-lg-4">
                                <div class="card mx-2 my-2 modif-card">
                                    <img src="../../../images/restaurant-japonais.jpg" class="card-img-top" alt="Un plat de sushi"></img>
                                    <div class="card-body text-center">
                                        <h2 class="h5 card-title">Restaurant Akira</h2>
                                        <p class="card-text"><small>Site de vente de produits frais en ligne</small></p>
                                        <Link to="/Portfolio" class="btn btn-primary">Voir le site</Link>
                                    </div>
                                    <span class="border-top text-center bg-dark bg-opacity-10 py-2"><small>Site réalisé avec WordPress</small></span>
                                </div>
                            </section>
                            <section class="col-12 col-md-6 col-lg-4">
                                <div class="card mx-2 my-2 modif-card">
                                    <img src="../../../images/espace-bien-etre.jpg" class="card-img-top" alt="Une tête de bouddah, d'un lotus et des pierres plates empliés"></img>
                                    <div class="card-body text-center">
                                        <h2 class="h5 card-title">Espace bien-être</h2>
                                        <p class="card-text"><small>Site de vente de produits frais en ligne</small></p>
                                        <Link to="/Portfolio" class="btn btn-primary">Voir le site</Link>
                                    </div>
                                    <span class="border-top text-center bg-dark bg-opacity-10 py-2"><small>Site réalisé avec LARAVEL</small></span>
                                </div>
                            </section>
                            <section class="col-12 col-md-6 col-lg-4">
                                <div class="card mx-2 my-2 modif-card">
                                    <img src="../../../images/seo.jpg" class="card-img-top" alt="Des mots concerant le web et la programmation"></img>
                                    <div class="card-body text-center">
                                        <h2 class="h5 card-title">SEO</h2>
                                        <p class="card-text"><small>Amélioration du référencement d'un site e-commerce</small></p>
                                        <Link to="/Portfolio" class="btn btn-primary">Voir le site</Link>
                                    </div>
                                    <span class="border-top text-center bg-dark bg-opacity-10 py-2"><small>Utilisation des outils SEO</small></span>
                                </div>
                            </section>
                            <section class="col-12 col-md-6 col-lg-4">
                                <div class="card mx-2 my-2 modif-card">
                                    <img src="../../../images/coder.jpg" class="card-img-top" alt="Un morceau de code en html et en bootstrap"></img>
                                    <div class="card-body text-center">
                                        <h2 class="h5 card-title">Création d'une API</h2>
                                        <p class="card-text"><small>Création d'une API RESTFULL publique</small></p>
                                        <Link to="/Portfolio" class="btn btn-primary">Voir le site</Link>
                                    </div>
                                    <span class="border-top text-center bg-dark bg-opacity-10 py-2"><small>PHP - SYMPHONY</small></span>
                                </div>
                            </section>
                            <section class="col-12 col-md-6 col-lg-4">
                                <div class="card mx-2 my-2 modif-card">
                                    <img src="../../../images/screens.jpg" class="card-img-top" alt="Un clavier, d'une tablette d'un ordinateur portable et du bas d'un écran"></img>
                                    <div class="card-body text-center">
                                        <h2 class="h5 card-title">Maquette d'un site web</h2>
                                        <p class="card-text"><small>Création du prototype d'un site</small></p>
                                        <Link to="/Portfolio" class="btn btn-primary">Voir le site</Link>
                                    </div>
                                    <span class="border-top text-center bg-dark bg-opacity-10 py-2"><small>Réalisé avec FIGMA</small></span>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}





export default Portfolio;