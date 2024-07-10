import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import navCss from '../styles/Navigation.module.css'; // Make sure this path and file name are correct

const Navigation = () => {
    return (
        <div>
            <nav className={navCss.navContainer}>
                <div className={navCss.navLogo}>
                    RateScout
                </div>
                <ul className={navCss.navLinks}>
                    <li>
                        <Link to="/" className={navCss.navLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Crypto" className={navCss.navLink}>Crypto</Link>
                    </li>

                    <li>
                        <Link to="/About" className={navCss.navLink}>About</Link>
                    </li>

                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Navigation;