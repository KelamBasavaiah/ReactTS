import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';

const Header = () => {    
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">Hi !</NavLink>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeStyle={{ color: '#2a6496' }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Table" exact activeStyle={{ color: '#2a6496' }}>Table</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Gallery" exact activeStyle={{ color: '#2a6496' }}>Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="/FAQ" exact activeStyle={{ color: '#2a6496' }}>FAQ</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;