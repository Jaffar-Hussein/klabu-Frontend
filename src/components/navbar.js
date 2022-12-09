import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/login.png'

import '../css/main.css'

function NavBar({ user }) {
    function handleLogoutClick() {
        fetch("http://127.0.0.1:3000/logout/", { method: "POST" })
        .then((r) => {
            console.log("hello" + r.json());
          if (r.ok) {
            // setUser(null);
          }
        });
      }
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <NavLink>
                        <img className="" src={logo} alt="logo" height="100" to='/' />
                    </NavLink>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

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
                            <NavLink className="nav-link text-light" to='/upload' >Upload</NavLink>

                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link text-light" to='/' >Contact Us</NavLink>

                        </li>

                        <li className="nav-item unstyled">
                            <NavLink className="nav-link  text-light" to="/">{user.username}</NavLink>
                       </li>
                        <li className="nav-item unstyled">
                        <button type="button" className="btn btn-outline" onClick={()=>handleLogoutClick()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"></path>
                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
                            </svg>
                            <span className="text-white"> Logout</span>
                        </button>
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