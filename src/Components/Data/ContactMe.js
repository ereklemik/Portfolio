import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import {MdLocationOn} from 'react-icons/md'

export const ContactData = [
  {
    email: "ereklemikiashvili@gmail.com",
    icon: <HiOutlineMail className={"mail"} />,
  },
  {
    phone: "579124111",
    icon: <BiPhone className={"mobilephone"} />,
  },
  {
    address: "Kvemo Kartli, Rustavi, Zhiuli Shartava 4a",
    icon: <MdLocationOn className={"location"} />,
  },
];
