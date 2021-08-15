import React from "react";
import Separator from "../../Common/Separator/Separator";
import { WorkData } from "../../Data/Experience";
import WorkCard from "./WorkCard";
import "./work.css"
const Work = () => {
  const data = WorkData;
  return (
    <div classname={"work"}>
      <label className={"section-title"}>Work & Experience</label>
      <Separator />
      <div className={"work-list"}>
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Work;
