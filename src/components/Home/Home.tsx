import React from 'react';
import Header from "../Header/Header";
import Welcome from '../Welcome/Welcome';
import Presentation from '../Presentation/Presentation';
import Card from "../Card/Card";
import "./Home.css"
import Legal_Mention from '../Legal_Mention/Legal_Mention';




const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Welcome/>
            <Presentation/>
            <Legal_Mention/>
        </div>
    );
};

export default Home;