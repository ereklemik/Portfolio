import React from "react";
import SocialContact from "../../Common/Social-Content/SocialContact";
import "./about.css";
const About = () => {
  return (
    <div className={"about"}>
      <div className={"about-top"}>
        <div className={"about-info"}>
          Hello There 👋 I'm <span className={'erekle'}>Erekle Mikiashvili</span> <br />
         <br/> <span className={'who'}>WEB DEVELOPER</span>
        </div>
        <div className={"about-photo"}>
          <img src={require("../../../assets/erekle.png")} className={"picture"} alt={'Erekle'}/>
        </div>
      </div>
      <div className={"about-bottom"}>
    <SocialContact/>
    </div>
    </div>
  );
};

export default About;
