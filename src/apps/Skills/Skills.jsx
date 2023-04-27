import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Frame, Separator } from "react95";
import SkillIcon from "../../components/SkillIcon";
let observer;
export default function Skills(props) {
  const [skills, setskills] = useState([
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "Figma", icon: "figma" },
    { name: "Firebase", icon: "firebase" },
    { name: "Git/Github", icon: "github" },
    { name: "HTML", icon: "html" },
    { name: "Linux", icon: "linux" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Postgresql", icon: "postgresql" },
    { name: "Python", icon: "python" },
    { name: "React", icon: "react" },
    { name: "Tailwindcss", icon: "tailwindcss" },
    { name: "Three.js", icon: "threejs" },
    { name: "Typescript", icon: "typescript" },
    { name: "Vue.js", icon: "vue" },
  ])
  const windowRef = useRef()
  const [windowHight, setWindowHight] = useState(0)
  const onresize = () => {
    if (windowRef.current) {
      setWindowHight(windowRef.current.offsetHeight - 120)

    }
  }
  useEffect(() => {
    if (windowRef.current) {
      observer = new ResizeObserver(onresize)
      observer.observe(windowRef.current)
    }
    return () => {

      if (observer) {

        observer.disconnect()
        observer = null
      }


    }
  }, [windowRef.current, windowHight])
  return (
    <div style={{ height: "100%" }} ref={windowRef}>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm">
          Save
        </Button>
      </Toolbar>


      <WindowContent style={{ hight: "100%" }}>
        <Cutout style={{ height: windowHight != 0 ? windowHight : "200px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <div style={{ padding: 10, width: "90%", display: "flex", flexWrap: "wrap", columnGap: 150, rowGap: 15, justifyContent: "center", alignItems: "center" }}>
            {skills.map((item, key) => (
              <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 10 }}>
                <SkillIcon skill={item.icon} size={50} />
                <h3>{item.name}</h3>
              </div>

            ))}
          </div>
        </Cutout>
      </WindowContent>
      {/* <Panel variant="well" className="footer">
          Put some useful informations here
        </Panel> */}
    </div>

  );
}
