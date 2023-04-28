import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Anchor } from "react95";
import Githubicon from "../../assets/images/githubicon.png"
import LeviathanLogo from "../../assets/images/LeviathanLogo.png"
import PreviewLeviathan from "../../assets/images/PreviewLeviathan.png"
import RealView from "../../assets/images/RealImage.jpg"
let observer;
export default function Leviathan(props) {
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

                            <img src={LeviathanLogo} height={50} />
                            <h1>Leviathan</h1>
                        </div>

                        <p>
                            build the Stabilty and the Control System for an ROV (remotely operated vehicle)
                        </p>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

                            <img src={PreviewLeviathan} style={{ width: "80%", maxWidth: 500, marginTop: 10, marginBottom: 10 }} />
                            <img src={RealView} style={{ width: "80%", maxWidth: 500, marginTop: 10, marginBottom: 10 }} />
                        </div>
                        <p>
                            Leviathan is an ROV that I and my team ROBO-TECH team build to participate in MATE ROV Competition 2022</p>

                        <p> I was a software member in the team and I helped to introduce ROS (Robotics Operating System ) to the team software stack also I build the whole ROS Simulation environment using Gazebo I used a ROS library to simulate the water physics and drag, and then I build the vehicle model in Gazebo then I build the ROS system to drive and control the ROV in the Water</p>

                        <p> also, I helped to Build the stability system of the ROV using the PID algorithm and the data from the IMU sensor and the pressure sensor in the ROV we were able to make the vehicle more stable, especially in the Automation mode</p>

                        <p>  I also build the camera system using an RTSP Server to stream the USB web cameras that connected the Raspberry Pi through the Ethernet network between the ROV and the Station</p>

                        <p>  finally, I helped in building the Computer vision and automation tasks of the ROV mission we mainly used Python/OpenCV to detect the important elements of the video and used the</p>



                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/RCLguMcX22g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/F_iTJ7sDIZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
