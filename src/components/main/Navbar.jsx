import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="main-top">
        <div className="main-top-cont">
          <div className="logo-cont">
            <img className="logo" src="./mountain.png" alt="fullteam" />
          </div>
          <div>
            <ul className={toggle ? "navULactive" : "navUL"}>
              <li>
                <a href="/">
                  <Link className="nula" to="/">
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <a href="/about">
                  <Link className="nula" to="/about">
                    About
                  </Link>
                </a>
              </li>
              <li>
                <a href="/services">
                  <Link className="nula" to="/services">
                    Services
                  </Link>
                </a>
              </li>
              <li>
                <a href="/carousel">
                  <Link className="nula" to="/carousel">
                    Activities
                  </Link>
                </a>
              </li>
              <li>
                <a href="/blog">
                  <Link className="nula" to="/blog">
                    Blog
                  </Link>
                </a>
              </li>
              <li>
                <a href="/tour">
                  <Link className="nula" to="/tour">
                    Tour
                  </Link>
                </a>
              </li>
              <li>
                <a href="/ourteam">
                  <Link className="nula" to="/ourteam">
                    Our Team
                  </Link>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <Link className="btn-t" to="/contact">
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
            <div className="hamburger" onClick={showNavbar}>
              {toggle ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-bars"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
