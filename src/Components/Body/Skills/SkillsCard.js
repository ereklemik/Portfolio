import React from "react";
import "./skillcard.css";
const SkillsCard = ({ skill }) => {
  return (
    <div className={"skill-card"}>
      <label classname={"skill-name"}>{skill.name}</label>
      <div classname={"skill-icon"}>{skill.icon}</div>
    </div>
  );
};

export default SkillsCard;
