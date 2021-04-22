import React from "react";
import { NavLink } from "react-router-dom";

import '../css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className='navbar-menu'>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" to="/dashboard">
                            Helpdesk Tickets
                        </NavLink>
                        <NavLink className="navbar-item" to="/tickets">
                            Ticket List
                        </NavLink>
                        <NavLink
                            className="navbar-item"
                            to="/submit">Submit a Ticket</NavLink>
                    </div>

                    <div className="navbar-end">
                        <NavLink className="navbar-item" to="/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;