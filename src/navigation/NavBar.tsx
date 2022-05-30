import React from 'react';
import { Link } from 'react-router-dom';

import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navStrip">
            <div className="navItem">
                <Link to="/">Home</Link>
            </div>
            <div className="navItem">
                <Link to="/new">New</Link>
            </div>
            <div className="navItem">
                <Link to="/charts">Charts</Link>
            </div>
            <div className="navItem">
                <Link to ="/account">Profile</Link>
            </div>
        </nav>
    )
}

export default NavBar;