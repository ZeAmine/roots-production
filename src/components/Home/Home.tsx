import React from 'react';
import Header from "../Header/Header";
import Welcome from '../Welcome/Welcome';
import Presentation from '../Presentation/Presentation';
import Card from "../Card/Card";
import "./Home.css"




const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Welcome/>
            <Presentation/>
        </div>
    );
};

export default Home;