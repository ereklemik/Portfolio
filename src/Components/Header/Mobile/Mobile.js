import React from "react";
import "./mobile.css";
import {BiX} from "react-icons/bi"
import { BiFolder } from "react-icons/bi";
import { BiBrain } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import {BiEnvelope} from "react-icons/bi"
const Mobile = ({ isOpen, setIsOpen }) => {
  return <div className={"mobile"}>
      <div className={'close-icon'} onClick={() => setIsOpen(!isOpen)}>
          <BiX/>
      </div>
      <div className={'mobile-options'}>
      <div className={"mobile-option"}>
        <a href="#Project">
          <BiFolder />
          Projects
        </a>
      </div>
      <div className={"mobile-option"}>
        <a href="#Skills">
          <BiBrain /> Skills
        </a>
      </div>
      <div className={"mobile-option"}>
        <a href="#Work">
            <BiBriefcaseAlt/>Work
        </a>
      </div>
      <div className={"mobile-option"}>
        <a href="#Contact">
            <BiEnvelope/>Contact
        </a>
      </div>
      </div>
  </div>;
};

export default Mobile;
