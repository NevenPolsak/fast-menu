import React, { useState } from "react";
import {Link} from "react-scroll"

import "./Header.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../images/logo.png";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className="header">
      <div onClick={handleClick}>
        {click ? (
          <AiFillCloseCircle className="icons" />
        ) : (
          <FaBars id="menu-btn" className="icons" />
        )}
      </div>

      <nav className={click ? "navbar active" : "navbar"}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link to="menu" spy={true} smooth={true} offset={-100} duration={500}>Menu</Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
        <span class="space"></span>
        <Link to="reviews" spy={true} smooth={true} offset={-100} duration={500}>Reviews</Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        <Link to="blogs" spy={true} smooth={true} offset={-90} duration={500}>Blogs</Link>
      </nav>

      <FaShoppingCart className="icons" />
      <a href="#home" className="logo">
        <img src={logo} alt="/" />
      </a>
    </header>
  );
}

export default Header;
