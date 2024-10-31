import React from "react";
import { useNavigate } from "react-router-dom";
import CourseList from "./CourseList/Courselist";
import "./Courses.css";

const Courses = () => {
  const navigate = useNavigate();
  const navigateToExplore = () => {
    navigate("/explore");
  };

  return (
    <div>
      <section className="courses" id="courses">
        <header class="section-header">
          <div class="header-text">
            <h1>Choose Your Favourite Course</h1>
            <div className="courseText">
              {" "}
              <p>
                Courses Section: Unlock Your Potential. Embark on a journey of
                self-discovery and inspiration. where knowledge meets innovation
                across various domains. Choose your path and elevate your skills
                with our carefully curated courses.
              </p>
              <button class="courses-btn" onClick={navigateToExplore}>
                View All
              </button>
            </div>
          </div>
        </header>
        <CourseList />
      </section>
    </div>
  );
};

export default Courses;
