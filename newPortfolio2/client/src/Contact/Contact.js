import React from 'react';
import "../main.css";
import githubLogo from "../images/githublogo.png"
import linkedInLogo from "../images/linkedinlogo.png"
import resumeFile from "../files/ChrisEtgesResume2019.pdf";

const Contact = () => {
    return (
        <div id="contact">
            <h2 className="subheading center">Get In Touch</h2>
            <br /><br />
            <div className="contact-buttons">
                <div></div>
                <div><a className="contact-links" href="mailto:c.etges86@gmail.com" rel="noopener noreferrer" target="_blank">Email</a></div>
                <div><span className="contact-links">Call  303.518.2933</span> </div>
                <div><a className="contact-links" href={resumeFile} download >Resume</a></div>
                <div></div>
            </div>
            <br/>
            <br />
            <h2 className="subheading center">Links</h2>
            <div className="grid-wrapper">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/cetges86"><img className="logo" alt="github logo" src={githubLogo} /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/chrisetges"><img className="logo" alt="linkedin logo" src={linkedInLogo} /></a>
            </div>
            <br/>
        </div>
    )

}

export default Contact;