import React from 'react';
import "../main.css";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Components/Jumbotron";
import Intro from "../Components/Intro";
import Portfolio from '../Portfolio/Portfolio';


const Main = () => {
    return (
        <div className="wrapper">
            <div className="frost">
                <Navbar />
                <Jumbotron />
            </div>
            <a className="center" href="#about"><i className="fas fa-angle-down"></i></a>
            <div>
                <Intro />
            </div>
            <div>
                <Portfolio />
            </div>
        </div>
    )
}
export default Main;