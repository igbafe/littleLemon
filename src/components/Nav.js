import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logo .svg'
import { FaAlignJustify } from "react-icons/fa6"
import { useState, useEffect } from "react";


function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const toggleMenu = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }

    useEffect(() => {
        window.addEventListener('resize', () => setWindowSize(window.innerWidth))
        if (window.innerWidth > 768) {
            setMenuOpen(menuOpen => false)
        }
        return () => window.removeEventListener('resize', () => setWindowSize(window.innerWidth));
    }, [windowSize])

    return (
        <nav>
            <div className=' shadow md:flex md:items-center md:justify-between'>
                <div className="p-5 flex justify-between items-center">
                    <img src={logo} alt="logo" />
                    <div className="block md:hidden">
                        <FaAlignJustify className="cursor-pointer" onClick={toggleMenu} />
                    </div>
                </div>
                <ul className={`p-5 md:items-center md:gap-4 z-[-1] md:z-auto ${menuOpen ? "flex flex-col md:flex-row bg-slate-700 text-white" : "hidden md:flex"}`}>
                    <li className="hover:text-green-700 py-3 md:my-0 text-center"><Link to="/">Home</Link></li>
                    <li className="hover:text-green-700 py-3 md:my-0 text-center"><Link to="#">About Us</Link></li>
                    <li className="hover:text-green-700 py-3 md:my-0 text-center"><Link to="#">Services</Link></li>
                    <li className="hover:text-green-700 py-3 md:my-0 text-center"><Link to="#">Menu</Link></li>
                    <li className="hover:text-green-700 py-3 md:my-0 text-center"><Link to="#">Reservations</Link></li>
                    <li className="hover:text-green-700 py-3 md:my-0 text-center"><Link to="#">Order Online</Link></li>
                    <li className="hover:text-green-700 py-3 md:my-0 text-center"><Link to="#">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav