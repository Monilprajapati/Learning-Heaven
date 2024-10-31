import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../../../context/UserProvider";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useUser();
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  const isHomePage = location.pathname === "/";

  const handleAuthAction = () => {
    if (user) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav
        className={isFixed ? "main-navbar active" : "main-navbar"}
        id="navbar"
      >
        <div href="/" className="logo" onClick={() => navigate("/")}>
          <img src={require("../../../images/home/logo.png")} alt="Logo" />
        </div>

        {isHomePage && (
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
        )}

        <div className="nav-buttons">
          {!isAuthPage && (
            <>
              {user ? (
                <div className="user-actions">
                  <button
                    className="explore-btn btn"
                    onClick={() => navigate("/explore")}
                  >
                    Explore
                  </button>
                  <button className="logout-btn btn" onClick={handleAuthAction}>
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  className="get-started-btn btn"
                  onClick={handleAuthAction}
                >
                  Get Started
                </button>
              )}
            </>
          )}

          {isAuthPage && (
            <button
              className="auth-switch-btn btn"
              onClick={() =>
                navigate(
                  location.pathname === "/login" ? "/register" : "/login"
                )
              }
            >
              {location.pathname === "/login" ? "Register" : "Login"}
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
