import React from "react";
import Separator from "../../Common/Separator/Separator";
import { MySkills } from "../../Data/Skill";
import "./skills.css";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  const data = MySkills;
  return (
    <div className={"skills"}>
      <label className={"section-title"}>Skills</label>
      <Separator />
      <div className={"skills-container"}>
        {data.map((item) => {
          return (
            <div classname={"skills-section"}>
              <label classname={"skills-section-title"}>{item.type}</label>
              <div classname={"skills-list"}>
                {item.list.map((skill) => {
                  return <SkillsCard skill={skill} />
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
