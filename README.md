# CEF-Devoir-5-Portfolio

Aucun prérequis pour utilisation

/* Partie 1 : Optimiser et supprimer les éléments inutiles de React et remplacer le favicon par le miens */

/* Partie 2 : Lier et envoyer le projet dans GitHub */

/* Partie 3 : Organisation et sélection du code et de ses futures composants */


////////////////////// COMPOSANTS ////////////////////////

Header                      Version desktop (Contiendra logo(gauche) et dans l'ordre 
                            Home, Services, Portfolio, Contact et Mentions légales(droite))
                            Le backgrounde est noir

                            Version tablette aucun changement avec la version desktop

                            Version smartphone logo(gauche) menu burger(droite)
                            La couleur du backgroudest identique

Footer                      Version desktop (contiendra 3 colonnes)
                            Les informations personnelles et les réseaux
                            Les liens du menu en vertical cette fois
                            Les projects en vertical aussi
                            Le background est noir

                            Version tablette aucun changement avec la version desktop

                            Version smartphone les 3 colonnes se suivent l'une après l'autre
                            Texte et icones collés à gauche
                            La couleur du background est identique

Home                        Version desktop et version tablette
                            Image de fond pleine page (Hero), 
                            Texte ligne 1 <h1> et texte ligne 2 <h2>
                            Bouton fond rouge écriture blanche
                            2 colonnes une a propos et une mes compétences
                                Dans a propos mettre une photo et un texte descriptif
                                Dans mes compétences mettres les langages 
                                    maitrisés avec une barre de progression (bootstrap)
                                Le backgroud est blanc
                            
                            Version smartphone image, titres <h1> et <h2> et bouton identique aux autres versions
                            Les 2 colonnes a propos et mes compétences sont l'une au dessus de l'autre maintenant
                            La couleur du background est identique

Mentions légales            Toutes version utilisation d'un slide déroulant pour 3 sections l'une sur l'autre (bootstrap)
                            Le nom des sections sont "Editeur du site", "Hébergeur" et "Crédit"

Portefolio                  Versions desktop et tablette
                            Le titre de la page, un texte, une barre bibliothèque
                            3 vignettes sur 2 lignes représentant les projects
                            Vignette (image, titre, texte, bouton bleu et langage utilisé)

                            Version smartphone tout les éléments sur une colonnes

Services                    Version desktop et tablette
                            Titre, texte et barre bleu
                            3 colonnes représentant "UX design", "Développement web" et "Référencement"
                            Icon, titre, texte descriptif

                            Version smartphone tout sur la même colonne

Contact                     Version desktop et tablette
                            Titre, texte, barre bleu
                            2 colonnes représentant "Formulaire de contact" et "Mes coordonnées"
                            Dans la première Titre barre bleu, nom, e-mail, téléphone, sujet, message, bouton bleu
                            Dans la 2ème titre, barre bleu, nom prénom, adresse, code postal ville, numéro, e-mail et google maps

                            Version smartphone tout sur la même colonne

Style                       Police Google sans-sérif "Nunito Sans"
                            Graisse de 400 pour le texte normal
                            Graisse de 600 pour les titres et les balises <strong>

Icones                      Les icones utilisés sont celles de la bibliothèque bootstrap :
                            https://icons.getbootstrap.com/

Couleurs                    Les couleurs sont celles disponible avec bootstrap sans personnalisation
                            https://getbootstrap.com/docs/5.2/customize/color/

Header dynamique            L'élément actif doit être afficher dans une autre couleur ou nuance
                            L'élément actif doit être en gras et souligner
                            Le texte des hyperlien est afficher en majuscule avec CSS ou bootstrap
                            Les liens doivent être souligner au survole

Footer dynamique            Si contenu 3ème colonne pas disponible redirigé vers la page Portfolio

Cards                       Une ombre est appliqué autour de la card au survole
                            La couleur de fond de la card doit être modifier au survole

Bouton                      La couleur de fond s'assombrie au survole

Modale                      Elle permet d'avoir les informations du profil GitHub
                            Elle s'ouvre au clique sur le bouton "en savoir plus"
                            Les informations sont disponible : https://api.github.com/users/github-john-doe
                            Récupération des informations depuis l'api
                            Les informations doivent être récupéré que au chargement de la page (utilisation "useEffect")