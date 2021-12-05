import React, {} from 'react';
import "./Cookies_Politics.css"
import "../Legal_Mention/Legal_Mention.css"
import { Link } from "react-router-dom";

const Cookies_Politics = () => {
  
    return (
        <div className="backgroundPurpleCookie">
            <div>
                <Link to="/">
                    <div className="returnButton">
                        <a href="#"><img src={process.env.PUBLIC_URL + "assets/imgs/horizontal_arrow.svg"} alt='Horizontal arrow' className="horizontal_arrow"/></a>
                    </div>
                </Link>
                <h2>Politique cookies</h2>
                <div className="text_content">
                    <p>
                        1. Qu'est-ce qu'un cookie ?<br></br>
                        Les cookies sont des fichiers qui sont déposés sur votre appareil, par exemple, lorsque vous visitez un site web. Ils sont utiles car ils permettent à Roots et à ses partenaires de reconnaître l'appareil d'un utilisateur et de favoriser la continuité de votre expérience. Vous pouvez trouver plus d'informations sur les cookies à l'adresse suivante : www.allaboutcookies.org ou www.youronlinechoices.eu.
                    </p>
                </div>
                <div className="text_content">
                    <p>
                        2. Comment utilisons-nous les cookies ?<br></br>
                        Les cookies remplissent de nombreuses fonctions différentes, comme vous permettre de naviguer efficacement entre les pages, mémoriser vos préférences et améliorer votre expérience d'utilisateur. Ils peuvent également contribuer à faire en sorte que les publicités que vous voyez en ligne soient plus pertinentes pour vous et vos intérêts.<br></br><br></br>
                        Il existe plusieurs catégories de cookies, notamment :<br></br><br></br>
                        Cookies strictement nécessaires<br></br><br></br>
                        Ces cookies sont déposés par Roots ou un tiers agissant pour notre compte, et sont essentiels pour vous permettre d'utiliser les fonctionnalités de base de nos Services, telles que fournir techniquement un contenu, définir vos préférences en matière de confidentialité, vous connecter ou remplir des formulaires. Sans ces cookies, les services que vous avez demandés, tel que le paiement, ne peuvent être fournis.<br></br><br></br>
                        Cookies facultatifs<br></br><br></br>
                        Les cookies facultatifs peuvent être des "cookies de premier niveau" ou des "cookies de tiers" comme expliqué dans le tableau ci-dessous. Vous pouvez en savoir plus sur la manière de contrôler les cookies "Toujours Actifs" dans les Options de gestion des cookies et des publicités ciblées.
                    </p>
                </div>
                <div className="text_content">
                    <p>
                        3. Options de gestion des cookies et des publicités ciblées<br></br>
                        Plusieurs options sont disponibles pour gérer vos préférences en matière de cookies, en fonction du type de cookie et de votre appareil. Chacune de ces options est décrite ci-dessous Veuillez noter qu'aucune option n'est suffisante pour gérer tous les cookies sur tous les appareils. Par conséquent, vous pouvez combiner une ou plusieurs options pour une couvrir l'ensemble.<br></br><br></br>
                        Paramètres du navigateur<br></br>
                        Vous pouvez utiliser les paramètres de votre navigateur web pour accepter, refuser et supprimer les cookies. Vous pouvez à tout moment retirer ou modifier votre consentement à notre utilisation de cookies, à l'exception des cookies strictement nécessaires (tel que décrit ci-dessus). Pour ce faire, suivez les instructions fournies par votre navigateur (généralement situées dans les paramètres "Aide", "Outils" ou "Modifier").<br></br><br></br>
                        Plateforme de Gestion du Consentement<br></br>
                        En outre, Spotify participe au Programme pour la Transparence et le Consentement de l'IAB Europe (IAB Europe Transparency and Consent Framework) et se conforme à ses spécifications et politiques. Nous utilisons une plate-forme de gestion du consentement ("PGC") portant le numéro d'identification 28. Vous pouvez consulter la PGC et accéder à vos paramètres de cookies à l'adresse CMP. La PGC vous permet de consentir au dépôt de cookies facultatifs par nous et nos partenaires tiers. À l'aide de la PGC, vous pouvez gérer vos préférences quant à la manière dont les cookies de premier niveau sont déposés en fonction de la catégorie de cookies, comme décrit à la section 2 Comment utilisons-nous les cookies ? . En outre, les cookies de tiers peuvent être gérés en fonction de la finalité pour laquelle vos données sont traitées ou en fonction des partenaires tiers impliqués. La PGC nous permet également de conserver des enregistrements de votre consentement. Si vous souhaitez mettre à jour vos choix de consentement via la PGC, veuillez consulter CMP.<br></br><br></br>
                        Comme indiqué ci-dessus, certaines finalités des cookies facultatifs de tiers sont décrites comme "Toujours Actifs". Toutefois, si vous ne souhaitez pas que les données des cookies soient traitées à ces fins, vous pouvez désactiver le bouton situé à côté de "stocker et/ou accéder aux informations" sur un appareil sur la PGC CMP.<br></br><br></br>
                        Veuillez noter que, comme pour les paramètres de votre navigateur web, vous ne pourrez pas retirer votre consentement pour les cookies qui sont strictement nécessaires au fonctionnement du Service.
                    </p>
                </div>
                <div className="text_content">
                    <p>
                    Publicités ciblées<br></br>
                    Certaines publicités ciblées que nous (ou un fournisseur de services agissant pour notre compte) vous affichons sur la base d'informations sur vos activités en ligne sur des sites web et autres propriétés interactives exploitées par des tiers peuvent inclure l'icône "Choix en matière de publicité" ou un autre mécanisme permettant de refuser de recevoir des publicités ciblées. Vous pouvez cliquer sur l'icône "Choix en matière de publicité" (AdChoices) ou visiter le site www.aboutads.info pour recevoir plus d'informations sur la collecte et l'utilisation des informations relatives à vos activités en ligne pour la publicité ciblée ou pour savoir comment refuser que vos données soient utilisées pour la publicité ciblée par les entreprises participant à l'Alliance Européenne pour la Publicité Numérique (AEPN).<br></br><br></br>
                    Les utilisateurs canadiens peuvent également consulter le site www.youradchoices.ca.<br></br>
                    Les utilisateurs européens peuvent également consulter le site www.youronlinechoices.com pour savoir comment refuser que leurs données soient utilisées pour de la publicité ciblée par les sociétés membres de l'Alliance Européenne pour la Publicité Numérique (AEPN).<br></br>
                    L'outil d'exclusion de la Network Advertising Initiative (NAI) www.networkadvertising.org/choices vous permet de refuser que les entreprises membres de la NAI utilisent les informations relatives à vos activités en ligne pour faire de la publicité ciblée.
                    Vous pouvez également choisir de ne pas recevoir de publicités ciblées en désactivant le bouton "Publicités personnalisées", situé dans la page des Paramètres de Confidentialité de votre compte Roots. Si vous choisissez de ne pas recevoir de publicités ciblées en utilisant l'option "Publicités personnalisées", Roots ne partagera pas vos informations avec des partenaires publicitaires tiers et n'utilisera pas les informations qu'ils auront reçues pour vous montrer des publicités ciblées. Nous ne vous montrerons pas non plus de publicités ciblées basées sur les informations que Roots recueille sur votre utilisation du Service Roots au fil du temps. Si vous exercez l'option de refus, nous vous montrerons toujours des publicités basées sur vos informations d'inscription à roots et sur votre utilisation en temps réel, mais elles ne seront pas spécifiquement adaptées à votre cas. Pour plus d'informations, veuillez consulter le site roots Centre de Confidentialité.<br></br><br></br>
                    Veuillez noter que même si vous vous désabonnez en utilisant les mécanismes ci-dessus, vous pouvez toujours recevoir des publicités lorsque vous utilisez le Service Roots
                    </p>
                </div>
                <div className="text_content">
                    <p>
                    5. Comment nous contacter<br></br>
                    Merci d'avoir lu notre Politique en matière de Cookies. Si vous avez des questions concernant cette Politique en matière de Cookies, veuillez contacter notre Délégué à la protection des données en utilisant le formulaire "Contactez-nous" sur le Centre de confidentialité ou en nous écrivant à l'adresse suivante :<br></br><br></br>
                    Roots <br></br><br></br>

                    29 bis rue du progrès Montreuil 93100.<br></br>
                    France<br></br><br></br>

                    Nous espérons que vous apprécierez Roots !
                    </p>
                </div>
            </div>
        </div>
    
    );
    };
    
export default Cookies_Politics;