import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Anchor } from "react95";
import Githubicon from "../../assets/images/githubicon.png"
import LSTNIcon from "../../assets/images/LSTNIcon.png"
import LstnPerview from "../../assets/images/LstnPerview.png"
let observer;
export default function LSTN(props) {
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

                            <img src={LSTNIcon} height={50} />
                            <h1>LSTN</h1>
                        </div>

                        <p>
                            is an app built using React Native and Nodejs that connects you with people around you based on your shared love for music. 🎶
                        </p>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                            <img src={LstnPerview} style={{ width: "80%", maxWidth: 500, marginTop: 10, marginBottom: 10 }} />
                        </div>
                        <p>is an app built using React Native and Nodejs that connects you with people around you based on your shared love for music. 🎶</p>

                        <p> I designed LSTN UI and Logo in Figma and made sure the app UI is Simple and easy to use so i went with the single Input login approach the user inter there conditionals and if the user is already registered in the Database the user will be forwarded to the home page but if not the user will be registered and forwarded to the Info Screen</p>

                        <p> the user has multiple  Auth options like Facebook, Google, Apple, and using their email and an OTP code that gets sent to the Email instead of a password</p>

                        <p> the user connects their Spotify to their account and they can find what people around them are listening</p>

                        <p>  I used the Spotify Web API to get the user's Current Playing Song data and I saved it in the API</p>

                        <p>  some technologies I used in LSTN :</p>

                        <ul>
                            <li> React Native and Expo</li>
                            <li>Prisma for the  PostgreSQL database</li>
                            <li>Nodejs and Express for the backend Server</li>
                            <li>JWT for Authentication</li>
                            <li>TailwindCSS</li>
                        </ul>

                        <p>

                            you can check the Github repo of the App and the backend server for more documentation and to see the code
                        </p>
                        <Anchor href='https://github.com/technoo0/LSTN' target='_blank'>
                            <img src={Githubicon} height={25} width={27} /> LSTN APP
                        </Anchor><br />
                        <Anchor href='https://github.com/technoo0/LSTN-Server' target='_blank'>
                            <img src={Githubicon} height={25} width={27} />  LSTN SERVER
                        </Anchor><br />
                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <h2>App Demo</h2>
                            <iframe width="600" height="315" src="https://www.youtube.com/embed/bWt9vHtml4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
