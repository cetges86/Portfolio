import React from 'react';
import react_logo from "../images/react.png";
import js_logo from "../images/jslogo.png";
import node_logo from "../images/node.png";
import jquery_logo from "../images/jquery.png";
import mysql_logo from "../images/mysql.png";
import mongodb_logo from "../images/mongodb-logo.png";

const Intro = () => {
    return (
        <div id="about" className="section-light grid-wrapper">
            <div>
            <h2 id="intro-banner">Hi, I'm Chris. Nice to meet you.</h2>
            <p className="intro-paragraph">Ever since I finished my bootcamp nearly a year ago, I've been building functional, useful tools, clean, modern webpages with HTML, CSS, and React.js, and learning as many new skills as I can. I love to solve problems and build things from scratch.
            <br/><br />
            Please check out my latest projects in the portfolio section and feel free to reach out to me for questions. Thanks</p>
            </div>
            <div className="icon-grid">
                <img className="tech-logo" alt="tech logo" src={react_logo}></img>
                <img className="tech-logo" alt="tech logo" src={js_logo}></img>
                <img className="tech-logo" alt="tech logo" src={node_logo}></img>
                <img className="tech-logo" alt="tech logo" src={jquery_logo}></img>
                <img className="tech-logo" alt="tech logo" src={mysql_logo}></img>
                <img className="tech-logo" alt="tech logo" src={mongodb_logo}></img>
            </div>
        </div>
    )
}


export default Intro;