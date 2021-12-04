import React, {} from 'react';


const Legal_Mention = () => {

    
return (
    <div>
        <a></a>
        <div>
            <h2>Mention Légales</h2>
            <div>
                <p>
                Le site roots.com est une publication de la société Roots.
                Roots est une société anonyme au capital de 300 709,88 euros inscrite au RCS de PARIS sous le numéro XXX XXX XXX. TVA intracommunautaire XXXX XXX XX social : 29 bis rue du progrès 93100 Paris – FRANCE 
                Directeur de la publication : Monsieur  OLONA, Directeur Général de la société Roots.
                La société  Roots est soumise au droit français.
                Hébergeur : OVH 
                Contact : support@roots.com ou Nous contacter
                Vous disposez d’un droit d’accès à vos données à caractère personnel, ainsi que le droit de demander la rectification ou l’effacement de ces dernières. Vous disposez également du droit de vous opposer au traitement de ces données ou de limiter ce dernier. Vous disposez enfin d’un droit de donner des directives sur le sort de vos données en cas de décès. Vous pouvez exercer ces droits gratuitement et à tout moment en contactant Roots par courriel à privacy@roots.com.
                </p>
            </div>
        </div>
        <div >
            <img src={process.env.PUBLIC_URL + "assets/imgs/Frame.svg"} alt='Women picture' className="women-picture"/>
        </div>

    </div>

);

};

export default Legal_Mention;