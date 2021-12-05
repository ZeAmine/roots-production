import React, {} from 'react';
import "./CGU.css"
import "../Legal_Mention/Legal_Mention.css"
import { Link } from "react-router-dom";

const CGU = () => {
  
    return (
        <div id="topPage" className="backgroundPurpleCGU">
            <div>
                <Link to="/">
                    <div className="returnButton">
                        <a href="#"><img src={process.env.PUBLIC_URL + "assets/imgs/horizontal_arrow.svg"} alt='Horizontal arrow' className="horizontal_arrow"/></a>
                    </div>
                </Link>
                <h2>Conditions générales d'utilisation</h2>
                <div className="text_content">
                    <p>
                        Données personnelles que nous collectons:<br></br>
                        Par « donnée personnelle », nous entendons toute donnée qui permet à Deezer de vous identifier directement ou indirectement.<br></br><br></br>
                        Vos données personnelles peuvent être soit fournies directement par vous-mêmes, soit fournies indirectement par des tiers (par exemple, lorsque vous souscrivez au service roots via un opérateur de télécommunication), soit collectées directement par nous lorsque vous utilisez le service Roots. Lorsque nous vous demandons de fournir vos données personnelles, nous indiquons celles dont la collecte est obligatoire. Nous vous remercions de nous communiquer des données complètes et exactes. Le fait de nous communiquer des données incomplètes et inexactes est susceptible de nous empêcher de vous fournir le service Roots.<br></br><br></br>
                        Vous trouverez ci-dessous les catégories de données que nous collectons dans le cadre du service Roots avec, pour chacune d’elles, une liste indicative des données concernées.
                    </p>
                </div>
                <div className="text_content">
                    <p>
                        Données personnelles que nous collectons lorsque vous utilisez le service  : <br></br><br></br>
                        Données d’usage : Vos interactions sur le service Roots (vos votes, les utilisateurs que vous suivez).<br></br><br></br>
                        Données techniques : informations sur votre appareil (type d’appareil que vous utilisez, adresse IP, identifiant unique, modèle de matériel, version du système d’exploitation, réglages matériels et logiciels, navigateur utilisé, cookie ou technologie similaire, langue du système)
                        Informations sur votre navigation sur le service roots (adresse IP, date et heure de connexion, pages consultées, date et heure de consultation, vos recherches)
                        Informations sur votre connexion à internet (fournisseur d’accès à internet, type de connexion : 3G, 4G, 5G, Wi-Fi, xDSL, câble, fibre optique, etc.)
                    </p>
                </div>
                <div className="text_content">
                    <p>
                        Pourquoi nous utilisons vos données personnelles<br></br>
                        Nous utilisons principalement vos données personnelles pour vous permettre de profiter du service roots, mais aussi pour remplir nos obligations légales ou réglementaires. Dans tous les cas, nous ne prenons aucune décision fondée exclusivement sur un traitement automatisé, y compris le profilage, produisant des effets juridiques vous concernant ou vous affectant de manière significative de façon similaire.<br></br><br></br>
                        Des informations complémentaires sur la manière dont nous utilisons les cookies et d’autres technologies similaires sont disponibles dans vos réglages de cookies.
                    </p>
                </div>
                <div className="text_content">
                    <p>
                        Comment nous protégeons vos données personnelles<br></br>
                        Nous mettons en œuvre des mesures destinées à protéger vos données personnelles contre les accès, utilisations et divulgations non autorisées, notamment par les mesures suivantes :<br></br><br></br>
                        Nous implémentons et maintenons des mesures techniques avancées pour nous assurer que vos données personnelles sont enregistrées et utilisées de manière confidentielle et sécurisée ;<br></br>
                        Nous restreignons et limitons l’accès à vos données personnelles, et nous monitorons qui accède, utilise et transfère vos données personnelles ;<br></br>
                        Les employés ayant accès à vos données personnelles sont tenus de se conformer avec notre politique interne sur la protection des données personnelles ainsi qu’avec leurs obligations de confidentialité ;<br></br>
                    Les partenaires et les prestataires de service avec qui nous partageons vos données personnelles sont tenus de se conformer avec toutes obligations applicables en matière de confidentialité et de protection des données personnelles.
                    </p>
                </div>
            </div>
        </div>
    
    );
    };
    
export default CGU;