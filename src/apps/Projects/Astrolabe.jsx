import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Anchor } from "react95";
import Githubicon from "../../assets/images/githubicon.png"
import AstroIcon from "../../assets/images/AstrolabeIcon.png"
import AstroPerview from "../../assets/images/AstrolabePreview.png"
let observer;
export default function Astrolabe(props) {
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
                <Cutout style={{ backgroundColor: "white", height: windowHight != 0 ? windowHight : "200px", overflow: "hidden" }}>
                    <div>
                        <div style={{ marginLeft: 5, display: "flex", alignItems: "center", gap: 10 }}>

                            <img src={AstroIcon} height={50} />
                            <h1>Astrolabe</h1>
                        </div>

                        <p>
                            Astrolabe was a project I build as a part of the Nasa Space Apps Hackathon  with we were able to be one of three nominees to the global round from Egypt<br />
                        </p>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                            <img src={AstroPerview} style={{ width: "80%", maxWidth: 500, marginTop: 10, marginBottom: 10 }} />
                        </div>
                        <p>
                            the app initiative was to raise awareness about space debris I was the team leader,  me and my team settled to build an AR (augmented reality) App that displays the space debris above you in real-time using data from NASA some of the tasks I did was  :<br />
                            <ul>
                                <li>Building a 3D space using Three.js</li>
                                <li>Writing the function that converts Orbital data to a position in the user Horizon using the data from the GPS</li>
                                <li>using the device compass and accelerometer to get the device position in 3d Space</li>
                                <li>using the device camera as a background for  visualization of the data to give the AR effect</li>
                                <li>designing the UI of the App  and the App logo in Figma</li>
                                <li>making tasks for the team members and Distributing the tasks among the team</li>
                                <li>writing the documentation about the app and making the  notes for the presentation</li>
                            </ul>


                            some of the Technologies I used was <br />
                            <ul>
                                <li>Javascript</li>
                                <li>React Native / Expo</li>
                                <li>Three.js</li>
                                <li>Figma</li>
                            </ul>


                        </p>
                        <p>
                            here is a video demonstration of the App in use
                        </p>
                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>


                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZK3WraZK-gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>



                        you can check the code of the app here

                        <Anchor href='https://github.com/technoo0/Astrolabe' target='_blank'>
                            <img src={Githubicon} height={25} width={27} /> Code in GitHub
                        </Anchor><br />
                        and you can see the app documentation and presentation on the Nasa space Apps website  <Anchor href='https://2021.spaceappschallenge.org/challenges/statements/mapping-space-trash-in-real-time/teams/astrolabe/project' target='_blank'>
                            Here
                        </Anchor><br />


                    </div>
                </Cutout>
            </WindowContent>
            {/* <Panel variant="well" className="footer">
          Put some useful informations here
        </Panel> */}
        </div>

    );
}
