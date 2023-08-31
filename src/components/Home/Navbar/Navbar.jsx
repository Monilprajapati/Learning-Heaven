import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateToExplore = () => {
    navigate("/explore");
  };

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = Math.floor(window.scrollY);
    const scrollThreshold = 30;

    if (scrollPosition > scrollThreshold && !isFixed) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={isFixed ? "main-navbar active" : "main-navbar"}
        id="navbar"
      >
        <a href="#" className="logo">
          <img src={require("../../../images/home/logo.png")} alt="Logo" />
        </a>
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <div className="get-started-btn-container">
          <button className="get-started-btn btn" onClick={navigateToExplore}>
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
