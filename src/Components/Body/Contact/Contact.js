import React from "react";
import "./contact.css";
import Separator from "../../Common/Separator/Separator";
import SocialContact from "../../Common/Social-Content/SocialContact";
import { ContactData } from "../../Data/ContactMe";
import ContactCard from "./ContactCard";
const Contact = () => {
  const data = ContactData;
  return (
    <div className={"contact"}>
      <label className={"section-title"}>Contact</label>
      <Separator />
      <div className={"contact-container"}>
        <div className={"contact-info"}>
          {data.map((item) => {
            return <ContactCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
