import react from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import mycomputerIcon from "../assets/icons/mycomputerIcon.png";
import Trash from "../assets/icons/trashIcon.png";

const Items = [
  {
    id: 0,
    name: "My Computer",
    logo: mycomputerIcon,
    content: AboutMe,
  },
  {
    id: 1,
    name: "Recycle Bin",
    logo: Trash,
    content: Skills,
  },
];

export default Items;
