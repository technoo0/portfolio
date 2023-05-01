import React, { useState } from 'react'
import IconBackGround from "../../assets/icons/tools.png"
import { Button } from 'react95'

const Tools = [
    {
        "title": "Free-Form Select",
        "disable": true,
        "handler": null
    },
    {
        "title": "Select",
        "disable": true,
        "handler": null
    },
    {
        "title": "Eraser/Color Eraser",
        "disable": false,
        "handler": "Eraser"
    },
    {
        "title": "Fill With Color",
        "disable": false,
        "handler": "Fill"
    },
    {
        "title": "Pick Color",
        "disable": false,
        "handler": "Pick"
    },
    {
        "title": "Magnifier",
        "disable": false,
        "handler": "Zoom"
    },
    {
        "title": "Pencil",
        "disable": false,
        "handler": "Pencil"
    },
    {
        "title": "Brush",
        "disable": false,
        "handler": "Brush"
    },
    {
        "title": "Airbrush",
        "disable": false,
        "handler": "Spray"
    },
    {
        "title": "Text",
        "disable": true,
        "handler": null
    },
    {
        "title": "Line",
        "disable": true,
        "handler": null
    },
    {
        "title": "Curve",
        "disable": true,
        "handler": null
    },
    {
        "title": "Rectangle",
        "disable": true,
        "handler": null
    },
    {
        "title": "Polygon",
        "disable": true,
        "handler": null
    },
    {
        "title": "Ellipse",
        "disable": true,
        "handler": null
    },
    {
        "title": "Rounded Rectangle",
        "disable": true,
        "handler": null
    }
]







export default function ToolsMune({ setTool }) {
    const [currentTool, setCurrentTool] = useState(6)
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 35px)",
            gridTemplateRows: "repeat(8, 35px)",
            gridGap: 3,
            gridAutoFlow: "column"
        }}>
            {Tools.map((tool, index) => (
                <Button
                    onClick={() => { setCurrentTool(index); setTool(tool.handler) }}
                    active={index == currentTool} disabled={tool.disable}
                    style={{ background: tool.disable ? "gray" : "" }}>
                    <span style={{ height: 16, width: 16, background: `url(${IconBackGround})`, backgroundRepeat: "no-repeat", backgroundPosition: `calc(-16px * ${index}) 0` }}></span>
                </Button>
            ))}
        </div>
    )
}
