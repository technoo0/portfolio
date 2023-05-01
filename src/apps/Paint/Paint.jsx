import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel } from "react95";
let observer;
import ColorPicker from "./ColorPicker";
import ToolsMune from "./ToolsMune";
export default function Paint(props) {
    const windowRef = useRef()

    const [windowHight, setWindowHight] = useState(0)
    const [Tool, setTool] = useState('Pencil')
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [CanvasSize, SetCanvasSize] = useState({ width: 500, height: 500 })
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");

    useEffect(() => {
        if (ctxRef.current) {

            if (Tool == "Eraser") {
                ctxRef.current.strokeStyle = "white";
            } else {
                ctxRef.current.strokeStyle = lineColor
            }
        }
    }, [Tool, lineColor])

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineWidth]);

    // Function for starting the drawing
    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        if (Tool == "Fill") {
            FillCanvas()
        } else if (Tool == "Pick") {
            ColorPick(e)
        } else if (Tool == "Zoom") {
            Zoom()
        }
        setIsDrawing(true);
    };

    // Function for ending the drawing
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };
    const Spray = function (e) {

        ctxRef.current.fillStyle = lineColor;
        ctxRef.current.rect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 1, 1);

        for (var i = 20; i--;) {
            ctxRef.current.rect(e.nativeEvent.offsetX + Math.random() * 20 - 10,
                e.nativeEvent.offsetY + Math.random() * 20 - 10, 1, 1);
            ctxRef.current.fill();
        }


    };

    // Color Pick Functions 
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    const ColorPick = (e) => {
        var c = ctxRef.current.getImageData(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 1, 1).data;
        var color = rgbToHex(c[0], c[1], c[2])
        setLineColor(color)
    }


    const Pencil = (e) => {
        setLineWidth(1)
        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        ctxRef.current.stroke();
    }


    const Eraser = (e) => {
        setLineWidth(10)

        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        ctxRef.current.stroke();
    }
    const Brush = (e) => {
        setLineWidth(10)
        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        ctxRef.current.stroke();
    }

    const FillCanvas = () => {
        ctxRef.current.fillStyle = lineColor
        ctxRef.current.fillRect(0, 0, CanvasSize.width, CanvasSize.height);
        ctxRef.current.fill();
    }
    const Zoom = () => {
        if (CanvasSize.width == 500) {

            SetCanvasSize({
                width: 1000,
                height: 1000
            })
        } else {
            SetCanvasSize({
                width: 500,
                height: 500
            })
        }
    }

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }

        if (Tool == "Pencil") {
            Pencil(e)
        } else if (Tool == "Spray") {
            Spray(e)
        } else if (Tool == "Brush") {
            Brush(e)
        } else if (Tool == "Eraser") {
            Eraser(e)
        } else if (Tool == "Fill") {
            FillCanvas()
        }

    };


    const onresize = () => {
        if (windowRef.current) {
            setWindowHight(windowRef.current.offsetHeight - 190)

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


            <WindowContent style={{ hight: "100%", width: "100%", padding: 0 }}>
                <div style={{ hight: "100%", width: "100%", display: "flex", gap: 5 }}>

                    <ToolsMune setTool={setTool} />
                    <Cutout style={{ backgroundColor: "gray", height: windowHight != 0 ? windowHight : "200px", width: "100%", overflow: "hidden", marginBottom: 10 }}>

                        <canvas
                            onMouseDown={startDrawing}
                            onMouseUp={endDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                            width={CanvasSize.width}
                            height={CanvasSize.height}
                            style={{ backgroundColor: "white" }}
                        />
                    </Cutout>
                </div>
                <ColorPicker setLineColor={setLineColor} lineColor={lineColor} />
            </WindowContent>
            {/* <Panel variant="well" className="footer">
          Put some useful informations here
        </Panel> */}
        </div>

    );
}
