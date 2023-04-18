import { useState, useEffect, useRef } from "react";


const useLongTouch = (ElementRef) => {
    const [timer, setTimer] = useState()
    const touchStart = () => {
        setTimer(setTimeout(handelEvent, 500))
    }
    const touchEnd = () => {
        if (timer) {
            clearTimeout(timer)
        }
    }
    const handelEvent = (e) => {
        e()
    }
    useEffect(() => {
        ElementRef.current.addEventListener("touchstart", touchStart)
        ElementRef.current.addEventListener("touchend", touchEnd)
        return () => {
            if (ElementRef.current) {
                ElementRef.current.removeEventListener("touchstart", touchStart);
                ElementRef.current.removeEventListener("touchend", touchEnd);
            }
        }
    }, [])
    return handelEvent
}

export default useLongTouch