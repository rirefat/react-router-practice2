import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
             <NavLink to="/" 
             className={({ isActive }) => (isActive ? "link-active" : "link")}
             >Home</NavLink>
             <NavLink to="/about" 
             className={({ isActive }) => (isActive ? "link-active" : "link")}
             >About</NavLink>
             <NavLink to="/friends" 
             className={({ isActive }) => (isActive ? "link-active" : "link")}
             >Friends</NavLink>
        </nav>
    );
};

export default Header;