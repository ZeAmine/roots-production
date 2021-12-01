import React from 'react';
import Header from "../Header/Header";
import Welcome from '../Welcome/Welcome';
import Card from "../Card/Card";
import "./Home.css"



const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Welcome/>
            {/* <Card/> */}
        </div>
    );
};

export default Home;