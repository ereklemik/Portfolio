import React from "react";
import { SocialData } from "../../Data/Social";
import "./socialcontact.css";
const SocialContact = () => {
  const data = SocialData;
  return (
    <div className={"social-contact"}>
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className={"social-icon-div"}>
              <img src={item.icon} className={"social-icon"} />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
