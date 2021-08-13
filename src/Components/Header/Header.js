import React, { useState } from "react";
import "./header.css";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"header"}>
      <div className={"logo"}>HackYourFuture</div>
      <div className={"menu"}>
        <div className={"web_menu"}>
          <Web />
        </div>
        <div className={"mobile_menu"}>
          <div onClick={() => setIsOpen(!isOpen)}>
            <div className={"menu-icon"}>
              <AiOutlineMenu />
            </div>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
