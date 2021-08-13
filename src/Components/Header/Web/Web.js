import React from "react";
import "./web.css";
import { BiFolder } from "react-icons/bi";
import { BiBrain } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import {BiEnvelope} from "react-icons/bi"
const Web = () => {
  return (
    <div className={"web-options"}>
      <div className={"web-option"}>
        <a href="#Project">
          <BiFolder />
          Projects
        </a>
      </div>
      <div className={"web-option"}>
        <a href="#Skills">
          <BiBrain /> Skills
        </a>
      </div>
      <div className={"web-option"}>
        <a href="#Work">
            <BiBriefcaseAlt/>Work
        </a>
      </div>
      <div className={"web-option"}>
        <a href="#Contact">
            <BiEnvelope/>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
