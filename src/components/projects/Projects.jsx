import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "../projectCard/ProjectCard";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <h2>👷‍♀️ Here are some projects I've worked on 👷‍♀️</h2>
        <div className="Projects__list">
					{projects.map((project) => (
						<ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    );
  }
}
