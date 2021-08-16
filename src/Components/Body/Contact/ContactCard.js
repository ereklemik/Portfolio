import React from "react";
import "./contactcard.css";
const ContactCard = ({ item }) => {
  return (
    <div className={"contact-card"}>
      <div className={"email"}>{item.email} </div>
      <div className={"phone"}>{item.phone}</div>
      <div className={"address"}>{item.address}</div>
      <div className={'contact-icon'}>{item.icon}</div>
    </div>
  );
};

export default ContactCard;
