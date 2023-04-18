import { useEffect, useRef, useState } from "react"




export const useDoubleTap = (e) => {
    const TapRaf = useRef()
    const [lastTap, setLastTap] = useState(new Date().getTime())

    const onTap = () => {

        var now = new Date().getTime();
        var timesince = now - lastTap;

        if ((timesince < 400) && (timesince > 0)) {
            // console.log("doubleTap")
            e()
        }

        setLastTap(now)
    }
    useEffect(() => {
        if (TapRaf.current) {
            TapRaf.current.addEventListener("touchstart", onTap)
        }
        return () => {
            if (TapRaf.current) {
                TapRaf.current.removeEventListener("touchstart", onTap);
            }
        }
    }, [TapRaf, lastTap])

    return TapRaf
}

