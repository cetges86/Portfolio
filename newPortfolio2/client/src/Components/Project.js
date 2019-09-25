import React from 'react';
import "../main.css";

const Project = (props) => {
    return (<div className="project-card">
        <div className="card-content">
            <h2 className="project-title center">{props.title}</h2>
            <br/>
            <img className="project-thumb" alt={props.title} src={props.image}></img>
            <br />
            <br />
            <p className="project-desc">{props.description}</p>
            <br />
            <div className="grid-wrapper">

                <a className="project-links" rel="noopener noreferrer" target="_blank" href={props.github_link}>Github Link</a>
                <a className="project-links" rel="noopener noreferrer" target="_blank" href={props.live_link}>Project Link</a>
            </div>
            <br />
            <h4 className="tech-title">Tech Used:</h4>
            <br />
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