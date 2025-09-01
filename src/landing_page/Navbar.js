import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
        <div className="container p-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              <img src="media/picture/logo.svg" style={{width: "25%"}}/>
            </Link>
           
            <form className="d-flex" role="search">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">
                About 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Pricing">
                Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Support">
                  Support
                </Link>
              </li>
             
            </ul>
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
