import React, { useRef, useState } from 'react'
// hools
import { Link, NavLink } from 'react-router-dom'
// logo img
import logo from "../assets/images/logo.png"
import DwCards from './Helpers/DwCards';

export default function Navbar() {
    const navRef = useRef();
    const [menuActive, setMenuActive] = useState(false);

    // mobile nav toggle active mode
    const navActive = () => {
        navRef.current.classList.toggle("nav-active")
        setMenuActive(e => !e)
    }

    // closing mobile nav in click links
    const navClose = () => {
        navRef.current.classList.remove("nav-active");
        setMenuActive(false);
    }
    return (
        // Navbar
        <>
            <nav style={{ "zIndex": "99999999" }} className='navbar'>
                <div className="container d-flex align-items-center justify-content-beetwen">
                    <Link to="/overview"><img src={logo} alt="rockstar games logo" className="navbar__logo" /></Link>

                    <ul ref={navRef} className='nav'>
                        <li className="nav-item">
                            <NavLink onClick={navClose} to="/overview" className="nav-link">Overview</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={navClose} to="/gta-online" className="nav-link">GTA Online</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={navClose} to="/gta-v" className="nav-link">GTA V</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={navClose} to="/guides" className="nav-link">Guides</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={navClose} to="/social" className="nav-link">Social Club</NavLink>
                        </li>


                        <button onClick={navClose} className="btn-global">
                            <Link to="/download">
                                DOWNLOAD
                            </Link>
                        </button>


                    </ul>

                    <div className={menuActive ? "menu-active" : null} onClick={navActive} id="menu"></div>
                </div>
            </nav>
        </>
    )
}
