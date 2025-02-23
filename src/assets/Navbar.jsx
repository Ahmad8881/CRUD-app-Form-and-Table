import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div   className="container-fluid">
      
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a style={{color: 'red', fontSize: "20px" }} className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a style={{fontSize: "20px"}} className="nav-link" href="/">Form</a>
            </li>
            <li className="nav-item">
              <a style={{fontSize: "20px"}} className="nav-link" href="/table">Table</a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
