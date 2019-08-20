import React from 'react';
import "../main.css";
import Project from "../Components/Project";
import projects from "./projects.json";

const Portfolio = () => {
    return (
        <div id="projects">
            <h1 className="center section-banner">Portfolio</h1>
            <div className="wrapper">
            {projects.map(project => {
                return <Project
                key={project.id}
                {...project} />
                
            })}
            </div>
        </div>
    )

}


export default Portfolio;