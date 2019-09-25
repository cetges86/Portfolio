import React, { Component } from 'react';
import "./navbar.css";

class Navbar extends Component {
    // not my code, trigger for nav hamburger menu
    toggleNavMenu = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "navbar-links") {
            x.className += " responsive";
        } else {
            x.className = "navbar-links";
        }

    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-banner">
                    <a className="link" href="/"><h3 id="logo">CE</h3></a>
                </div>
                <div id="myTopnav" className="navbar-links">
                    <a className="links-right" href="#about">About</a>
                    <a className="links-right" href="#projects">Projects</a>
                    <a className="links-right" href="#contact">Contact</a>
                    <a className="bar-icon" onClick={this.toggleNavMenu}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;