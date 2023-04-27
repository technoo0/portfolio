import React, { useState } from 'react'
import { Button } from 'react95'

export default function BottomStart({ }) {
    const [show, setShow] = useState('box')
    const FullScreen = () => {
        var elem = document.documentElement;

        /* View in fullscreen */

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        setShow('none')

    }
    return (

        <Button style={{ display: show }} onClick={FullScreen} primary>Full Screen</Button>

    )
}
