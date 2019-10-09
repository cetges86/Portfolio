import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import "./navbar.css";

class Navbar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
      }

    // not my code, trigger for nav hamburger menu
    toggleNavMenu = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "navbar-links") {
            x.className += " responsive";
        } else {
            x.className = "navbar-links";
        }
    }

    toTop = () => {
        scroll.scrollToTop();
    }

    handleScroll = () => {
        let mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-banner">
                <a className="link" href="/"><h3 id="logo">CE</h3></a>
                </div>
                <div id="myTopnav" className="navbar-links">
                    <Link
                        className="links-right"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >About</Link>
                    {/* <a className="links-right" href="#about">About</a> */}
                    <Link
                        className="links-right"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Projects</Link>
                    {/* <a className="links-right" href="#projects">Projects</a> */}
                    <Link
                        className="links-right"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Contact</Link>
                    <Link
                        id="myBtn"
                        className="fixed-link"
                        activeClass="active"
                        onClick={this.toTop}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    ><i class="fas fa-chevron-up"></i></Link>
                    {/* <a className="links-right" href="#contact">Contact</a> */}
                    <a className="bar-icon" onClick={this.toggleNavMenu}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;