import React from "react";
import "./workcard.css";
const WorkCard = ({ item }) => {
  return (
    <div className={"work-card"}>
      <img src={item.companyLogo} className="company-logo"/>
      <div className={"work-info"}>
        <label className={"company-name"}>{item.company}</label>
      </div>
      <div className={"position"}>
        <label className={"position"}>{item.position}</label>
      </div>
      <div className={"work-dates"}>
        <label>{item.dateJoin}</label> - <label>{item.dateEnd}</label>
      </div>

      <div className={"description"}>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
