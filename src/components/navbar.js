import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/login.png'
import '../css/main.css'

function NavBar() {
    // function handleLogoutClick() {
    //     fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
    //       if (r.ok) {
    //         setUser(null);
    //       }
    //     });
    //   }
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img className="" src={logo} alt="logo" height="100" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link active text-light " aria-current="page" end to="/"    >Home</NavLink>
                        </li>
                        <li className="nav-item " >
                            <NavLink className="nav-link text-light " to='/recipes' >Recipes</NavLink>

                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link text-light" to='/' >Categories</NavLink>

                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link text-light" to='/' >Contact Us</NavLink>

                        </li>

                        <li className="nav-item unstyled">
                            <NavLink className="nav-link  text-light" to="/">Jaffar</NavLink>
                        </li>
                    </ul>


                    {/* <ul className="navbar-nav me-auto mb-2 ">


                    </ul> */}
                </div>
            </div>
        </nav >
    )
}
export default NavBar;