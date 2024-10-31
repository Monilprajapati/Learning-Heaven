import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { FaHome, FaHeart, FaClock, FaVideo } from "react-icons/fa";
const Sidebar = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToExplore = () => {
    navigate("/explore");
  };
  const navigateToWatchlater = () => {
    navigate("/watchlater");
  };
  const navigateToLikedvideos = () => {
    navigate("/likedvideos");
  };
  return (
    <div className="sidebar-container">
      <h2 className="title">Learning Heaven</h2>
      <div className="links_sidebar">
        <div
          className={`homeLabel ${
            window.location.pathname === "/" ? "active" : ""
          }`}
          onClick={navigateToHome}
        >
          <FaHome className="homeIcon" />
          <label htmlFor="" className="Label">
            Home
          </label>
        </div>
        <div
          className={`exploreLabel ${
            window.location.pathname === "/explore" ? "active" : ""
          }`}
          onClick={navigateToExplore}
        >
          <FaVideo className="exploreIcon" />
          <label htmlFor="" className="Label">
            Explore
          </label>
        </div>
        <div
          className={`watchLater ${
            window.location.pathname === "/watchlater" ? "active" : ""
          }`}
          onClick={navigateToWatchlater}
        >
          <FaClock className="clockIcon" />
          <label htmlFor="" className="Label">
            Watch Later
          </label>
        </div>
        <div
          className={`likedVideos ${
            window.location.pathname === "/likedvideos" ? "active" : ""
          }`}
          onClick={navigateToLikedvideos}
        >
          <FaHeart className="heartIcon" />
          <label htmlFor="" className="Label">
            Liked Videos
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
