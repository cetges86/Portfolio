import React from 'react';
import "../main.css";
import githubLogo from "../images/githublogo.png"
import linkedInLogo from "../images/linkedinlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faDownload } from '@fortawesome/free-solid-svg-icons';
import resumeFile from "../files/ChrisEtgesResume2019.pdf";

const Contact = () => {
    const emailIcon = <FontAwesomeIcon icon ={faEnvelope} />
    const phoneIcon = <FontAwesomeIcon icon ={faPhone} />
    const downloadIcon = <FontAwesomeIcon icon ={faDownload} />


    return (
        <div id="contact">
            <h2 className="subheading center">Get In Touch</h2>
            <br /><br />
            <div className="contact-buttons">
                <div></div>
                <div><a className="contact-links" href="mailto:c.etges86@gmail.com" rel="noopener noreferrer" target="_blank">{emailIcon} Email Me</a></div>
                <div><span className="contact-links">{phoneIcon} Call Me  303.518.2933</span> </div>
                <div><a className="contact-links" href={resumeFile} download >{downloadIcon} Resume</a></div>
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