import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Anchor } from "react95";
import Githubicon from "../../assets/images/githubicon.png"
import ChessIcon from "../../assets/images/ChessBulbLogo.png"
let observer;
export default function ChessBulb(props) {
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

                            <img src={ChessIcon} height={50} />
                            <h1>ChessBulb</h1>
                        </div>

                        <p>is a social media website for Chess players built using Vue.js, Firebase, and Nodejs</p>
                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h2>App Demo</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cXNy7SF2p1s?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>




                        <p>ChessBulb was the first Full stack project I worked on i worked with a team of other two people we had multiple meetings for a while to design the system  of the website we had main three functions the website had to have</p>
                        <ul>
                            <li> Social posts and comments</li>
                            <li>Video lectures with a chessboard playback</li>
                            <li>Live lectures with a real-time chessboard</li>
                            <li>the ability to buy or subscribe to specific lectures or course</li>
                        </ul>
                        <p>
                            my main taskes was in the backend code of the website some of the features i implmented was
                        </p>

                        <ul>
                            <li>user posts and comment and the ability to have threads in comments</li>
                            <li>writing chess moves in the comment will get converted into a chessboard that loops through the moves</li>
                            <li>a chess AI to evaluate the game and suggest chess moves to the user</li>
                            <li>the payment and subscription system using stripe</li>
                            <li>realtime video streaming using P2P</li>
                            <li>realtime chat and realtime chessboard using  web sockets</li>
                            <li>video recording and uploading using google cloud</li>
                        </ul>


                        you can check the code of the website here

                        <Anchor href='https://github.com/adham404/ChessBulb' target='_blank'>
                            <img src={Githubicon} height={25} width={27} /> Code in GitHub
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
