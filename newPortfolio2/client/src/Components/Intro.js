import React from 'react';
import react_logo from "../images/react.png";
import js_logo from "../images/jslogo.png";
import node_logo from "../images/node.png";
import jquery_logo from "../images/jquery.png";
import mysql_logo from "../images/mysql.png";
import mongodb_logo from "../images/mongodb-logo.png";

const Intro = () => {
    return (
        <div id="about" className="section-light col-3-wrapper">
            <h2 id="intro-banner">Hi, I'm Chris. Nice to meet you.</h2>
            <div>
                <p className="intro-paragraph">I'm glad you found my page! Hopefully we can work together to build something you're in need of or something you've been dreaming of. I build webpages that will help grow the online aspects of your business or your brand. I design webpages that look as good as they function. Please feel free to reach out and ask any questions you might have, or discuss what you're aiming to acheive and let's get started!
            <br /><br />
                    Please check out my latest projects in the portfolio section and see what I've built for my clients. Thanks!</p>
            </div>
            <div className="icon-grid">
                <img className="tech-logo" alt="tech logo" src={react_logo}></img>
                <img className="tech-logo" alt="tech logo" src={js_logo}></img>
                <img className="tech-logo" alt="tech logo" src={node_logo}></img>
                <img className="tech-logo" alt="tech logo" src={jquery_logo}></img>
                <img className="tech-logo" alt="tech logo" src={mysql_logo}></img>
                <img className="tech-logo" alt="tech logo" src={mongodb_logo}></img>
            </div>
            <div>
                <ul className="services-list"> <h3>Services I Provide:</h3><br/>
                    <li>Dynamic Single Page and Multi-page HTML/CSS webpages</li>
                    <li>Full-stack Javascript Applications</li>
                    <li>Multiple Live Updating Components</li>
                    <li>RESTful APIs for data fetching</li>
                    <li>HTML E-mail Mailers</li>
                    <li>Redesigns and Maintenence</li>
                    <li>Updating jQuery to MVC structure using React for much faster navigation and speeds.</li>
                    <li>CSS and jQuery for webpages that need to run on IE browsers</li>
                    <li>Mobile Responsiveness and Multiple browser support</li>
                </ul>
            </div>

        </div>
    )
}


export default Intro;