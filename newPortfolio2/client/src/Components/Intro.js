import React from 'react';
import react_logo from "../images/react.png"
import js_logo from "../images/jslogo.png"
import node_logo from "../images/node.png"
import jquery_logo from "../images/jquery.png"
import mysql_logo from "../images/mysql.png"
import mongodb_logo from "../images/mongodb-logo.png"

const Intro = () => {
    return (
        <div className="section-light grid-wrapper">
            <p className="intro-paragraph">I'm a full stack Javascript developer, with experience building functional, useful tools with React.js with a clean code base and user interface. I love to solve problems and build things from scratch.
                
            Please check out my latest projects in the portfolio section and feel free to reach out to me for questions. Thanks :)</p>
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