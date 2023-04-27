import react from "react";
import LSTN from "./LSTN";
import LSTNIcon from "../../assets/images/LSTNIcon.png"
import Fily from "./Fily";
import FilyIcon from "../../assets/images/FilyIcon.png"
import AstroIcon from "../../assets/images/AstrolabeIcon.png"
import Astrolabe from "./Astrolabe";
import ChessIcon from "../../assets/images/ChessBulbLogo.png"
import ChessBulb from "./ChessBulb";
const Items = [
    {

        name: "LSTN",
        content: LSTN,
        icon: LSTNIcon,
        initalHight: 400,
        initalWidth: 500,
        text: "a mobile app that connects you with people around you based on your shared love for music. 🎶"

    },
    {

        name: "Fily",
        content: Fily,
        icon: FilyIcon,
        initalHight: 400,
        initalWidth: 500,
        text: "a google drive clone i build using NodeJs and React"

    },
    {

        name: "Astrolabe",
        content: Astrolabe,
        icon: AstroIcon,
        initalHight: 400,
        initalWidth: 500,
        text: "it's an AR app for space debris tracking build in React Native"

    },
    {

        name: "ChessBulb",
        content: ChessBulb,
        icon: ChessIcon,
        initalHight: 400,
        initalWidth: 400,
        text: " A social media platform for chess players"

    },

];

export default Items;
