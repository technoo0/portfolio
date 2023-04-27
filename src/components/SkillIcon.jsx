import React from 'react'
import aws from "../assets/Skills/aws.svg"
import docker from "../assets/Skills/docker-icon.svg"
import figma from "../assets/Skills/figma.svg"
import firebase from "../assets/Skills/firebase.svg"
import github from "../assets/Skills/github-icon.svg"
import html from "../assets/Skills/html-5.svg"
import linux from "../assets/Skills/linux-tux.svg"
import nextjs from "../assets/Skills/nextjs-icon.svg"
import postgresql from "../assets/Skills/postgresql.svg"
import python from "../assets/Skills/python.svg"
import react from "../assets/Skills/react.svg"
import tailwindcss from "../assets/Skills/tailwindcss-icon.svg"
import threejs from "../assets/Skills/threejs.svg"
import typescript from "../assets/Skills/typescript-icon.svg"
import vue from "../assets/Skills/vue.svg"
export default function (props) {
    const SkillImg = (name) => {
        const skill_data = {
            "aws": aws,
            "docker": docker,
            "figma": figma,
            "firebase": firebase,
            "github": github,
            "html": html,
            "linux": linux,
            "nextjs": nextjs,
            "postgresql": postgresql,
            "python": python,
            "react": react,
            "tailwindcss": tailwindcss,
            "threejs": threejs,
            "typescript": typescript,
            "vue": vue,
        }
        return skill_data[name]
    }
    return (
        <img src={SkillImg(props.skill)} width={props.size} height={props.size} />
    )
}
