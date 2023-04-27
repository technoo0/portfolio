import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Anchor } from "react95";
import Githubicon from "../../assets/images/githubicon.png"
import Icon from "../../assets/images/FilyIcon.png"
import Perview from "../../assets/images/FilyPreview.png"
let observer;
export default function Fily(props) {
    const windowRef = useRef()

    const [windowHight, setWindowHight] = useState(0)
    const onresize = () => {
        if (windowRef.current) {
            setWindowHight(windowRef.current.offsetHeight - 70)

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

            <WindowContent style={{ hight: "100%" }}>
                <Cutout style={{ backgroundColor: "white", height: windowHight != 0 ? windowHight : "200px", overflow: "hidden" }}>
                    <div>
                        <div style={{ marginLeft: 5, display: "flex", alignItems: "center", gap: 10 }}>

                            <img src={Icon} height={50} />
                            <h1>Fily</h1>
                        </div>
                        <p>
                            Fily is a file Storage website I build using React and Nodejs
                        </p>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                            <img src={Perview} style={{ width: "80%", maxWidth: 500, marginTop: 10, marginBottom: 10 }} />
                        </div>
                        <p>Fily was my first solo full-stack project I decided to go with the PERN stack for this project (Postgres, Express, React, and Node) I build a full Authentication system using sessions and Oauth from Facebook, Google, and Twitter also I implemented email auth using the link that has a JWT token that gets send to the user email using an STMP server</p>

                        <p>users can upload and download files to their account and preview them dircrtily in the browser and most importantly securely I accomplished this by making a temporary link to every file the user request</p>

                        <p>also, the user can create folders and group files in them and share the folders publicly with people using a link</p>

                        <p>some technologies I used in Fily :</p>



                        <ul>
                            <li>Figma for the UI and the Logo design</li>
                            <li>Sequelize for the database ORM</li>
                            <li>Zustand for State Mangment</li>
                            <li>Passport.js and Express Sessions for Authentication</li>
                            <li>Material UI
                            </li>
                        </ul>











                        <Anchor href='https://github.com/technoo0/fily' target='_blank'>
                            <img src={Githubicon} height={25} width={27} /> Code in GitHub
                        </Anchor><br />

                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h2>App Demo</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cXNy7SF2p1s?start=88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>


                    </div>
                </Cutout>
            </WindowContent>
            {/* <Panel variant="well" className="footer">
          Put some useful informations here
        </Panel> */}
        </div>

    );
}
