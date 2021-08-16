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
    type:"Web Development",
    list: [
      {
        name: "HTML" ,
        icon: <AiFillHtml5 className={'skill-icon'} id={'html'} />,
      },
      {
        name: "CSS",
        icon: <SiCss3  className={'skill-icon'} id={'css'}/>,
      },
      {
        name: "MaterialUI",
        icon: <SiMaterialUi className={'skill-icon'} id={'material'}/>,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className={'skill-icon'} id={'bootstrap'} />,
      },
      {
        name: "ReactJS",
        icon: <DiReact className={'skill-icon'} id={'react'}/>,
      },
    ],
  },

  {
    type: "Programming Languages",
    list: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript  className={'skill-icon'} id={'javascript'}/>,
      },
      {
        name: "Python",
        icon: <DiPython  className={'skill-icon'} id={'python'}/>,
      },
      {
        name: "Java",
        icon: <DiJava className={'skill-icon'} id={'java'}/>,
      },
     
    ],
  },
];
