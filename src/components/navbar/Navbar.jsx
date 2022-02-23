import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./navbar.css";
const Navbar = () => {
  const executeScroll2 = (id) => {
    const anchor = document.querySelector(id);

    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div className={`nav ${!show && "nav__blue"}`}>
      <button className="jump-button" onClick={() => executeScroll2("#intro")}>
        Go intro
      </button>
      <button
        className="jump-button"
        style={{}}
        onClick={() => executeScroll2("#projects")}
      >
        Go projects
      </button>
      <button
        className="jump-button"
        style={{}}
        onClick={() => executeScroll2("#about")}
      >
        Go about
      </button>
      <button
        className="jump-button"
        onClick={() => executeScroll2("#contact")}
      >
        Go contact
      </button>
    </div>
  );
};

export default Navbar;
