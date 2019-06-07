import React from 'react';
import "../main.css";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Components/Jumbotron";
import Intro from "../Components/Intro";


const Main = () => {
    return (
        <div className="wrapper">
            <div className="frost">
                <Navbar />
                <Jumbotron />
                <div className="center">
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>

            <div>
                <Intro />
            </div>
        </div>
    )
}
export default Main;