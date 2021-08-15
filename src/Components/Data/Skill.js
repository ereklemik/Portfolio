import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiPython } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiReact } from "react-icons/di";
import {SiMaterialUi} from "react-icons/si"
import {SiBootstrap} from 'react-icons/si'

export const MySkills = [
  {
    type: "Web Programming",
    list: [
      {
        name: "HTML",
        icon: <AiFillHtml5 />,
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
      },
      {
        name: "MaterialUI",
        icon: <SiMaterialUi />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
      },
      {
        name: "ReactJS",
        icon: <DiReact />,
      },
    ],
  },

  {
    type: "Programming Languages",
    list: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript />,
      },
      {
        name: "Python",
        icon: <DiPython />,
      },
      {
        name: "Java",
        icon: <DiJava />,
      },
     
    ],
  },
];
