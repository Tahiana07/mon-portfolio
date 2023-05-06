import React from "react";
import '../assets/styles/projets.css';
import elamina from "../assets/images/e-lamina.PNG";
import logement from "../assets/images/logement-app.PNG";
import lalao from "../assets/images/lalao-antsika1.PNG";
import clinique from "../assets/images/clinique-antsika.PNG";
import fanorona2d from "../assets/images/fanorona2d.PNG";
import fanorona3d from "../assets/images/fanorona3d.PNG";

const Projets = () => {
    return (
        <>
            <div className="pro">
                <div className="container-table">
                    <table className="customers">
                        <tr>
                            <th>Année scolaire</th>
                            <th>Titre</th>
                            <th>Extrait image</th>
                            <th>A propos</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>2021 - 2022</td>
                            <td>"E-lamina"</td>
                            <td><img src={elamina} alt="e-lamina" /></td>
                            <td>Création d'une application Web</td>
                            <td>Projet collectif utilisant les technologies Javascript.
                                 Il s'agit de créer un dashboard afin de gérer l'agenda d'un utilisateur, 
                                 l'utilisation de calendriers en faisant des "drag and drop", 
                                 gérer des différentes tâches avec la méthode PERT(Program Evaluation and Review Technique). 
                                 Ce projet était réalisé avec VueJs et express.</td>
                        </tr>
                        <tr>
                            <td>2021 - 2022</td>
                            <td>"Fanorona"</td>
                            <td><img src={fanorona2d} alt="fanorona2d" />
                                <img src={fanorona3d} alt="fanorona3d" /></td>
                            <td>Création de jeux</td>
                            <td>Projet collectif utilisant le langage de programmation Javascript.
                                 Le but était de créer un "board game Malagasy", nous avons choisi "fanoron-telo" et 
                                 nous avons implémenté 2 versions de ce jeu, l'une est une fanorona 2D et 
                                 l'autre est en 3D (utilisant three.js, une bibliothèque javascript 3D).
                                 </td>
                        </tr>
                        <tr>
                            <td>2020 - 2021</td>
                            <td>"Logement App"</td>
                            <td><img src={logement} alt="logement-app" /></td>
                            <td>Création d'un logiciel de gestion</td>
                            <td>Projet individuel réalisé avec python pour la gestion de travaux dans un appartement : 
                                gérer l'entré de nouveau locataire, la liste des locataires, 
                                la gestion des appartements c'est à dire ceux qui sont déjà prises et 
                                ceux qui n'ont pas encore de locataires, et aussi la gestion de loyer, 
                                par mois, c'est à dire gérer les paiements faites par chaque locataire. 
                                Comme interface utilisateur, j'ai utilisé Tkinter, une bibliothèque UI(User Interface) de python. 
                                Comme SGBDR(Systèmes de Gestion de Base de Données Relationnelles), j'ai utilisé MySQL.</td>
                        </tr>
                        <tr>
                            <td>2020 - 2021</td>
                            <td>"Lalao Antsika"</td>
                            <td><img src={lalao} alt="lalao-antsika" /></td>
                            <td>Création d'une applications mobile</td>
                            <td>Application instructive créer en équipe avec java mobile. 
                                Cet application est composé de jeux éducatif comme 
                                le quiz afin de développer la connaissance générale des enfants et des jeunes, divisés en quatre rubriques : 
                                Histoire, Madagascar, Sports et Geographie. Il y aussi des jeux amusants comme les Tic Tac Toe.</td>
                        </tr>
                        <tr>
                            <td>2019 - 2020</td>
                            <td>"Clinique Antsika"</td>
                            <td><img src={clinique} alt="clinique-antsika" /></td>
                            <td>Création d'une applications Web de gestion</td>
                            <td>Projet collectif utilisant la langage de programmation php. 
                                Comme interface utilisateur, nous avons utilisé HTML&CSS. Comme SGBDR(Systèmes de Gestion de Base de Données Relationnelles), nous avons utilisé MySQL.
                                Ce Projet consistait à gérer les travaux dans un clinique : 
                                rendez-vous, prises en charge, consultations. Il y a plusieurs utilisateurs qui se communiquent : 
                                les médecins, les secrétaires et les récéptionnistes à l'aide du "chat" que nous avons implémenté dans notre projet. 
                                Le projet est à employé avec un réseau local, et chaque utilisateur recevra une adreesse IP qui sera son identifiant utilisateur.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Projets