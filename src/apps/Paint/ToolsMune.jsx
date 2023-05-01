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
        "handler": null
    },
    {
        "title": "Fill With Color",
        "disable": false,
        "handler": null
    },
    {
        "title": "Pick Color",
        "disable": false,
        "handler": null
    },
    {
        "title": "Magnifier",
        "disable": false,
        "handler": null
    },
    {
        "title": "Pencil",
        "disable": false,
        "handler": null
    },
    {
        "title": "Brush",
        "disable": false,
        "handler": null
    },
    {
        "title": "Airbrush",
        "disable": false,
        "handler": null
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







export default function ToolsMune() {
    const [currentTool, setCurrentTool] = useState(0)
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 35px)",
            gridTemplateRows: "repeat(8, 35px)",
            gridGap: 3,
            gridAutoFlow: "column"
        }}>
            {Tools.map((tool, index) => (
                <Button onClick={() => setCurrentTool(index)} active={index == currentTool} disabled={tool.disable} style={{ background: tool.disable ? "gray" : "" }}>
                    <span style={{ height: 16, width: 16, background: `url(${IconBackGround})`, backgroundRepeat: "no-repeat", backgroundPosition: `calc(-16px * ${index}) 0` }}></span>
                </Button>
            ))}
        </div>
    )
}
