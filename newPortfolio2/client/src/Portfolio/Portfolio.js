import React from 'react';
import "../main.css";
import Project from "../Components/Project";
import projects from "./projects.json";

const Portfolio = () => {
    return (
        <div id="#projects" className="section-dark">
            <h1 className="center">Portfolio</h1>
            <div className="col-3-wrapper">
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