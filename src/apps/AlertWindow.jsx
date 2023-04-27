import React, { useEffect, useState } from "react";
import { WindowContent, Button } from "react95";
import Error from "../assets/icons/Error.png"
import Success from "../assets/icons/Success.png"
import useStore from "../store";
export default function AlertWin(props) {
    const CloseWindow = useStore((state) => state.CloseWindow);
    const [myID, setMyId] = useState()
    useEffect(() => {
        setMyId(useStore.getState().windowsStack.length - 1)
    }, [])
    return (
        <div>
            <WindowContent style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                {props.error ? <div style={{ display: "flex", gap: 10, alignItems: "center" }}>

                    <img src={Error} width={30} height={30} />
                    <p style={{ fontSize: 30, margin: 0 }}>Error</p>
                </div> : <div style={{ display: "flex", gap: 10, alignItems: "center" }}>

                    <img src={Success} width={30} height={30} />
                    <p style={{ fontSize: 30, margin: 0 }}>Success</p>
                </div>}
                {props.text.map((data, key) => (
                    <p key={key}>{data}</p>
                ))}

                <Button onClick={() => CloseWindow(myID)} style={{ marginBottom: 10, width: 200 }}>
                    OK
                </Button>

            </WindowContent>

        </div>
    );
}
