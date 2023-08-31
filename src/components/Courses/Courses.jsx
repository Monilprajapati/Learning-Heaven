import React from "react";
import { useNavigate } from "react-router-dom";
import CourseList from "./CourseList/Courselist";
import "./Courses.css";

const Courses = () => {

  const navigate = useNavigate();
  const navigateToExplore = () => {
      navigate("/explore")
  }

  return (
    <div>
      <section className="courses" id="courses">
        <header class="section-header">
          <div class="header-text">
            <h1>Choose Your Favourite Course</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button class="courses-btn btn" onClick={navigateToExplore}>View All</button>
        </header>
        <CourseList />
      </section>
    </div>
  );
};

export default Courses;
