import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Frame } from "react95";
import useStore from "../../store";
import ProjectsList from "./ProjectsList"
let observer;
export default function AboutMe(props) {
    const windowRef = useRef()
    const AddWindow = useStore((state) => state.AddWindow);
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
                <Cutout style={{ height: windowHight != 0 ? windowHight : "200px", overflow: "hidden" }}>
                    <div style={{ paddingLeft: 10, paddingRight: 10, alignContent: "center", justifyContent: "center", display: "flex", flexWrap: "wrap", gap: 15 }}>
                        {ProjectsList.map((item, key) => (
                            <Frame variant='outside'
                                key={key}
                                shadow
                                style={{ padding: '1rem', lineHeight: '1.5', width: "100%", maxWidth: 400, minHeight: 250, justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
                                onClick={() => AddWindow(item.name, item.content, item.initalHight, item.initalWidth)}
                            >

                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <img src={item.icon} height={50} />
                                    <h1>{item.name}</h1>
                                </div>
                                <div>
                                    <p>
                                        {item.text}
                                    </p>
                                </div>

                            </Frame>
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
