import React, { useEffect, useState } from 'react'
import { Button, Frame } from 'react95'

const Colors = [
    {
        "name": "Black",
        "hex": "#000000"
    },
    {
        "name": "Gray",
        "hex": "#808080"
    },
    {
        "name": "Silver",
        "hex": "#C0C0C0"
    },
    {
        "name": "White",
        "hex": "#FFFFFF"
    },
    {
        "name": "Maroon",
        "hex": "#800000"
    },
    {
        "name": "Red",
        "hex": "#FF0000"
    },
    {
        "name": "Orange",
        "hex": "#FFA500"
    },
    {
        "name": "Yellow",
        "hex": "#FFFF00"
    },
    {
        "name": "Green",
        "hex": "#008000"
    },
    {
        "name": "Lime",
        "hex": "#00FF00"
    },
    {
        "name": "Teal",
        "hex": "#008080"
    },
    {
        "name": "Aqua",
        "hex": "#00FFFF"
    },
    {
        "name": "Navy",
        "hex": "#000080"
    },
    {
        "name": "Blue",
        "hex": "#0000FF"
    },
    {
        "name": "Purple",
        "hex": "#800080"
    },
    {
        "name": "Fuchsia",
        "hex": "#FF00FF"
    }
]



export default function ({ setLineColor, lineColor }) {

    const [currentColor, SetCurrentColor] = useState(lineColor)
    useEffect(() => {
        SetCurrentColor(lineColor)
    }, [lineColor])
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Frame style={{ height: 70, width: 70, }} variant='well'>
                <Button square active disabled style={{ position: "absolute", top: 8, left: 8, zIndex: 10 }}>
                    <span style={{ background: currentColor, width: "100%", height: "100%" }}>

                    </span>
                </Button>
                <Button square active disabled style={{ position: "absolute", top: 26, left: 26 }}>
                    <span style={{ background: "#FFFFFF", width: "100%", height: "100%" }}>

                    </span>
                </Button>
            </Frame>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 35px)",
                gridTemplateRows: "repeat(2, 1fr)",
                gridGap: 3,
                gridAutoFlow: "column"
            }}>
                {Colors.map((color, index) => (<Button square active key={index} onClick={() => { setLineColor(color.hex); SetCurrentColor(color.hex) }}>
                    <span style={{ background: color.hex, width: "100%", height: "100%" }}>

                    </span>
                </Button>))}
            </div>
        </div>
    )
}