import React from "react";
import Separator from "../../Common/Separator/Separator";
import { ProjectData } from "../../Data/Projects";
import "./project.css";
import ProjectCard from "./ProjectCard";
const Project = () => {
  const data = ProjectData;
  return (
    <div className={"project"}>
      <label className={"section-title"}>Projects</label>
      <Separator />
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
