import React from 'react';
import "../main.css";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Components/Jumbotron";
import Intro from "../Components/Intro";
import Portfolio from '../Portfolio/Portfolio';
import Contact from "../Contact/Contact";
import { Link } from "react-scroll";


const Main = () => {
    return (
        <div className="wrapper" id="top">
            <div className="frost">
                <Navbar />
                <Jumbotron />
            </div>
            <Link
                id="jumbotron-arrow"
                className="center"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
            <i className="fas fa-angle-down"></i>
            </Link>

            <Intro />

            <Portfolio />

            <Contact />

        </div>
    )
}
export default Main;