import React from 'react';
import "../main.css";

const Project = (props) => {
    return (<div className="project-card">
        <img className="project-thumb" alt={props.title} src={props.image}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a rel="noopener noreferrer" target="_blank" href={props.github_link}>Github Link</a>
        <a rel="noopener noreferrer" target="_blank" href={props.live_link}>Project Link</a>
        <ul> Tech Used:
            
            {console.log(props.tech)}
            {props.tech.map((tech) => 
                <li>{tech}</li>
            )
            }

            
        </ul>
    </div>
    )
}

export default Project