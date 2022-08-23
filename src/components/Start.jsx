import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
// img
import logo from "../assets/images/logo.png"
// music
import music from "../assets/music/main.mp3"

export default function Start() {
    let elem = document.documentElement;

    /* View in fullscreen */
    function requestFullScreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    // playing bg music
    const ms = new Audio(music);

    const play = () => {
        requestFullScreen();
        ms.play();
    }

    return (
        <main style={{ "zIndex": "999999999" }} id='start'>
            <div className="container">
                <img data-aos="fade-up" src={logo} alt="rockstar games logo" />
                <h1 data-aos="fade-up" data-aos-duration="1500" className="title">Experience entertainment blockbusters, Grand Theft Auto V and GTA Online.</h1>
                <button data-aos="zoom-in-up" onClick={play} className="btn-global"><Link to="/overview">GET STARTED</Link></button>
            </div>
        </main>
    )
}
