import React, { useEffect, useRef, useState } from "react";
import { WindowContent, Button, Toolbar, Cutout, Panel, Separator, Slider } from "react95";
import playIcon from "../../assets/icons/play.png"
import pauseIcon from "../../assets/icons/pause.png"
import stopIcon from "../../assets/icons/stop.png"
import ejectIcon from "../../assets/icons/eject.png"
import backskip from "../../assets/icons/backskip.png"
import backseek from "../../assets/icons/backseek.png"
import forwardseek from "../../assets/icons/forwardseek.png"
import forwardskip from "../../assets/icons/forwardskip.png"
import soundIcon from "../../assets/icons/soundIcon.png"
let observer;
let interval;
export default function VideoPlayer(props) {
    const windowRef = useRef()
    const VideoRef = useRef()
    const [VideoTime, setVideoTime] = useState(0)
    const [VideoDuration, setVideoDuration] = useState(0)
    const [VideoStatus, setVideoStatus] = useState()
    const [PinPos, setPinPos] = useState(0)
    const [skipping, setSkipping] = useState(false)
    const [windowHight, setWindowHight] = useState(0)
    const onresize = () => {
        if (windowRef.current) {
            setWindowHight(windowRef.current.offsetHeight - 200)

        }
    }
    const toHHMMSS = function (secnum) {
        var sec_num = parseInt(secnum, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + ':' + minutes + ':' + seconds;
    }

    useEffect(() => {
        if (VideoRef.current) {

            interval = setInterval(() => {
                if (VideoRef.current.currentTime) {
                    setVideoStatus(VideoRef.current.paused)
                    setVideoDuration(VideoRef.current.currentTime)
                    setVideoTime((VideoRef.current.currentTime / VideoRef.current.duration) * 100)
                }
            }, 1000)
        }
        return () => {
            clearInterval(interval)
        }
    }, [VideoRef.current])
    const HandelSkip = (e) => {
        setPinPos(e)
        if (VideoRef.current) {
            setVideoTime()
            VideoRef.current.currentTime = VideoRef.current.duration * (e / 100)

        }
    }
    const HandelClick = () => {
        setSkipping(true)
    }
    const StopClick = () => {
        setSkipping(false)
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
                <Button variant="menu" size="sm" disabled>
                    File
                </Button>
                <Button variant="menu" size="sm" disabled>
                    Edit
                </Button>
                <Button variant="menu" size="sm" disabled>
                    Save
                </Button>
            </Toolbar>


            <WindowContent style={{ hight: "100%", padding: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", height: windowHight != 0 ? windowHight : "200px" }}>
                    <div style={{ width: "100%", background: "black", height: "100%" }}>

                        <video style={{ width: "100%", height: "100%", objectFit: "contain" }} ref={VideoRef} preload="preload">
                            <source src="https://archive.org/download/Microsoft_Windows_95_Video_Guide_1995_Uncut_VHS_x264_Aw.mkv/Microsoft_Windows_95_Video_Guide_1995_Uncut_VHS_x264_Aw.ogv" type="video/ogg" />
                            <source src="https://archive.org/download/Microsoft_Windows_95_Video_Guide_1995_Uncut_VHS_x264_Aw.mkv/Microsoft_Windows_95_Video_Guide_1995_Uncut_VHS_x264_Aw.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div style={{ paddingLeft: 10, paddingRight: 10 }}>

                        <Slider value={!skipping ? VideoTime : PinPos} style={{ marginTop: 10, marginBottom: 5 }} onChange={HandelSkip} onMouseDown={HandelClick} onMouseUp={StopClick} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "start" }}>
                            <Button variant='thin' style={{ width: 30, padding: 0, height: 30 }} onClick={() => VideoRef.current.play()}>
                                <img src={playIcon} width={25} />
                            </Button>
                            <Button variant='thin' style={{ width: 30, padding: 0, height: 30 }} onClick={() => VideoRef.current.pause()}>
                                <img src={pauseIcon} width={25} />
                            </Button>
                            <Button variant='thin' style={{ width: 30, padding: 0, height: 30 }} onClick={() => VideoRef.current.stop()}>
                                <img src={stopIcon} width={25} />
                            </Button>
                            <Separator orientation='vertical' size={"30px"} />
                            <Button variant='thin' disabled style={{ width: 30, padding: 0, height: 30 }}>
                                <img src={backskip} width={25} />
                            </Button>
                            <Button variant='thin' disabled style={{ width: 30, padding: 0, height: 30 }}>
                                <img src={backseek} width={25} />
                            </Button>
                            <Button variant='thin' disabled style={{ width: 30, padding: 0, height: 30 }}>
                                <img src={forwardseek} width={25} />
                            </Button>
                            <Button variant='thin' disabled style={{ width: 30, padding: 0, height: 30 }}>
                                <img src={forwardskip} width={25} />
                            </Button>

                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyItems: "center", gap: 5, paddingLeft: 10, paddingRight: 10 }} >
                            <img src={soundIcon} width={25} />
                            <Slider defaultValue={30} size={"100px"} style={{ margin: 0 }} onChange={(e) => VideoRef.current.volume = e / 100.0} />
                        </div>
                    </div>
                    <div>

                    </div>
                    <Panel variant="well" className="footer" style={{ paddingLeft: 10, paddingRight: 10, display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%" }}>
                        <div>

                            {toHHMMSS(VideoDuration)}/{toHHMMSS(VideoRef.current && VideoRef.current.duration ? VideoRef.current.duration : 0)}
                        </div>
                        <div>
                            {VideoStatus ? "Paused" : "Playing"}
                        </div>
                    </Panel>
                </div>

            </WindowContent>

        </div>

    );
}
