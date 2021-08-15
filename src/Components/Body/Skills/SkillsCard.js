import React from "react";
import "./skillcard.css";
const SkillsCard = ({ skill }) => {
  return (
    <div className={"skill-card"}>
      <label classname={"skill-type"}>{skill.name}</label>
      <div classname={"skill-icon"}>{skill.icon}</div>
    </div>
  );
};

export default SkillsCard;
