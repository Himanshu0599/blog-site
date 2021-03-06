import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
  return(
      <>
      <div className="container-fluid nav_bg">
          <div className="row">
             <div className="col-10 mx-auto">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                 <a className="navbar-brand" href="# ">
                    Himanshu Soft
                 </a>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavSupportedContent" 
                aria-controls="navbarNavSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink  
                        exact
                        className="nav-link active" 
                        aria-current="page" 
                        to="/">
                            Home
                        </NavLink>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink 
                        exact
                        className="nav-link" 
                        to="/about">About
                        </NavLink>
                        </li>
                        
                        
                        <li className="nav-item">
                        <NavLink
                        exact 
                        className="nav-link" 
                        to="/contact">Contact Us
                        </NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink
                        exact 
                        className="nav-link" 
                        to="/service">Services
                        </NavLink>
                        </li>
                </ul>
    </div>
  </div>
</nav>  
          
  </div>
 </div>
</div>
      </>
  )
}

export default Navbar;