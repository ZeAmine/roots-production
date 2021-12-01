import React from 'react';
import "./Header.css"


const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={process.env.PUBLIC_URL + "assets/imgs/logo.jpg"} alt="logo root"/>
            </div>
            <div>
                <a href="#" className="button_connect">Se connecter</a>
            </div>
        </div>
    );
};

export default Header;