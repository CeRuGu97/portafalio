import React, { useState } from 'react'
import { MenuItems } from './menuItems'
import './navbar.css';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handeClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                CesarRG
                <i className="fa fa-terminal"></i>
            </h1>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={handeClick}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="menu-icon" onClick={handeClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
        </nav>
    )
}

export default Navbar;
