import React from "react";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-desc">
        <h2>"Unlock Your Potential" Empowering Education with Our Experts on Anytime & Anywhere</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <form className="search-bar">
          <input type="search" placeholder="Search Your Course" />
          <i className="fa-solid fa-search"></i>
        </form>
      </div>
      <div className="banner-img">
        <div className="banner-img-container">
          <img src= {require("../../../images/home/student.png")} alt="Student" />
          <div className="states">
            <div className="total-courses">
              <div className="icon">
                <i className="fa-solid fa fa-book" style={{color: "white"}}></i>
              </div>
              <div className="desc">
                <span>374+</span>
                <span>Total Courses</span>
              </div>
            </div>

            <div className="courses-ratings">
              <span>
                4.8<i className="fa-solid fa-star"></i>
              </span>
              <span>Ratings (64k)</span>
            </div>
          </div>

          <div className="pattern">
            <img src= {require("../../../images/home/Pattern2.png")} alt="Pattern" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
