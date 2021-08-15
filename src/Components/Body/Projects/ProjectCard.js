import React from "react";
import "./projectcard.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
const ProjectCard = ({ project }) => {
  return (
    <div className={"project-card"}>
      <div className={"project-info"}>
        <label className={"project-title"}>{project.title}</label>
        <div className={"project-links"}>
          {project.demo && (
            <a className={"project-link"} href={project.demo}>
              <AiOutlineEye className={"link-buton"} /> Demo
            </a>
          )}
          {project.github && (
            <a className={"project-link"} href={project.demo}>
              <AiFillGithub className={"link-buton"} /> Github
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className={"project-photo"} />
    </div>
  );
};

export default ProjectCard;
