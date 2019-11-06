import React from 'react';
import "../main.css";

const Project = (props) => {
    return (
        <div className="project-card">
            <div className="card-content">
                <h2 className="project-title center">{props.title}</h2>
                <br />
                <div className="grid-wrapper-card">
                    <img className="project-thumb" alt={props.title} src={props.image}></img>
                    
                    <p className="project-desc">{props.description}</p>
                </div>
                <br />
                <div className="col-3-wrapper" id="mobile-grid">
                    <a className="project-links" rel="noopener noreferrer" target="_blank" href={props.github_link}>Github Link</a>
                    <h4 className="tech-title">Tech Used:</h4>
                    <a className="project-links" rel="noopener noreferrer" target="_blank" href={props.live_link}>Project Link</a>
                </div>

                <ul className="list-wrapper">
                    {props.tech.map((tech) =>
                        <li key={tech.toString()} className="tech-list">{tech}</li>
                    )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Project