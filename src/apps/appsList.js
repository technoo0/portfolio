import react from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import mycomputerIcon from "../assets/icons/mycomputerIcon.png";
import Trash from "../assets/icons/trashIcon.png";
import GlobeIcon from "../assets/icons/globeIcon.png"
import projectsIcons from "../assets/icons/projectsIcons.png"
import textIcon from "../assets/icons/textIcon.png"
import mediaplayerIcon from "../assets/icons/media_player.png"
import Win95PaintLogo from "../assets/icons/Win95PaintLogo.webp"
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import VideoPlayer from "./Video/Video";
import Paint from "./Paint/Paint";
const Items = [
  {
    id: 0,
    name: "About Me",
    logo: GlobeIcon,
    content: AboutMe,
    initalHight: 600,
    initalWidth: 400
  },
  {
    id: 1,
    name: "My Projects",
    logo: projectsIcons,
    content: Projects,
    initalHight: 700,
    initalWidth: 600
  },
  {
    id: 2,
    name: "Skills",
    logo: textIcon,
    content: Skills,
    initalHight: 400,
    initalWidth: 400
  },
  {
    id: 3,
    name: "Contact Me",
    logo: mycomputerIcon,
    content: ContactMe,
    initalHight: 450,
    initalWidth: 400
  },
  {
    id: 3,
    name: "Media Player",
    logo: mediaplayerIcon,
    content: VideoPlayer,
    initalHight: 450,
    initalWidth: 400
  },
  {
    id: 3,
    name: "Paint",
    logo: Win95PaintLogo,
    content: Paint,
    initalHight: 550,
    initalWidth: 450
  },
];

export default Items;
