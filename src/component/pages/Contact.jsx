import "../css/contact.css";
import "../css/style.css";


const Contact = () => {
    return(
        <div>
            <main>
                <div class="d-flex flex-column align-items-center my-5">
                    <h1 class="d-flex flex-column align-items-center">Contact</h1>
                        <span class="d-flex flex-column text-center align-items-center pb-2">Pour me contacter en vue d'un 
                            entretien ou d'une future 
                            collaboration, merci de remplir le 
                            formulaire de contact
                        </span> 
                    <hr class="col-4 mx-auto mt-4 border-bottom border-primary border-5 opacity-100"></hr>
                </div>
                <div class="container col-md-8">
                    <div class="row">
                        <section class="col-lg-6">
                            <div>
                                <h2 class="h3 pb-2 border-bottom border-primary border-3">Formulaire de contact</h2>
                                <form action="" method="get">
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="nom" placeholder="Votre nom" required></input>
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="mail" placeholder="Votre adresse email" required></input>
                                    </div>
                                    <div class="mb-3">
                                        <input type="tel" class="form-control" id="tel" placeholder="Votre numéro de téléphone"></input>
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="sujet" placeholder="Sujet" required></input>
                                    </div>
                                    <div class="mb-3">
                                        <textarea class="form-control" id="textarea" placeholder="Votre message" rows="3" required></textarea>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary btn-sm center" type="submit" value="envoi">Envoyer</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <section class="col-lg-6 d-flex flex-column">
                            <div class="d-flex flex-column">
                                <h2 class="h3 pb-2 border-bottom border-primary border-3">Mes coordonnées</h2>
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
                                    <iframe class="mx-md-3 mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540524!2d4.796403975973387!3d45.77866571240255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1732554202261!5m2!1sfr!2sfr" 
                                        title="Google Maps" width="300" height="200" 
                                        allowfullscreen="" loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}





export default Contact;