import React, {} from 'react';
import "./Legal_Mention.css"

const Legal_Mention = () => {
    
return (
    <div className="backgroundPurple">
        <div>
            <div className="returnButton">
                <a href="#"><img src={process.env.PUBLIC_URL + "assets/imgs/horizontal_arrow.svg"} alt='Horizontal arrow' className="horizontal_arrow"/></a>
            </div>
            <h2>Mention Légales</h2>
            <div className="text_content">
                <p>
                Le site roots.com est une publication de la société Roots.<br></br><br></br>
                Roots est une société anonyme au capital de 300 709,88 euros inscrite au RCS de PARIS sous le numéro XXX XXX XXX. TVA intracommunautaire XXXX XXX XX social : 29 bis rue du progrès 93100 Paris – FRANCE <br></br><br></br>
                Directeur de la publication : Monsieur  OLONA, Directeur Général de la société Roots.<br></br><br></br>
                La société  Roots est soumise au droit français.<br></br><br></br>
                Hébergeur : OVH <br></br><br></br>
                Contact : support@roots.com ou Nous contacter<br></br><br></br>
                Vous disposez d’un droit d’accès à vos données à caractère personnel, ainsi que le droit de demander la rectification ou l’effacement de ces dernières. Vous disposez également du droit de vous opposer au traitement de ces données ou de limiter ce dernier. Vous disposez enfin d’un droit de donner des directives sur le sort de vos données en cas de décès. Vous pouvez exercer ces droits gratuitement et à tout moment en contactant Roots par courriel à privacy@roots.com.
                </p>
            </div>
        </div>
        <div className="star_back">
            <img src={process.env.PUBLIC_URL + "assets/imgs/star_back.svg"} alt='stars' className="stars"/>
        </div>
    </div>

);
};

export default Legal_Mention;