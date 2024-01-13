import React from "react";
import { NavLink } from "react-router-dom"
import logo from "../src/images/mg_logo.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top  navbar-dark bg-danger  shadow-sm">
                <div className="container-lg">
                    <NavLink className=" navbar-brand " to="/">
                        <img src={logo} alt="logo" width="50" height="40" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target="#navbarSupportedContent.show">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item mx-2 active">
                                <NavLink exact activeClassName="menu_active" className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                            </li><li className="nav-item mx-2">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/cv">CV</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/work">Projects</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar