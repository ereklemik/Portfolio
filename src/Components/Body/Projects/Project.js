import React from 'react'
import { ProjectData } from '../../Data/Projects'
import "./project.css"
import ProjectCard from './ProjectCard'
const Project = () => {
    const data = ProjectData
    return (
        <div className={'project'}>
        <label className={'section-title'}>Projects</label>
        <div>
        {data.map((project)=>{
            return <ProjectCard project={project}/>
        })}

        </div>
           
        </div>
    )
}

export default Project
