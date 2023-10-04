import React from "react";
import "./Explore.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CategoriesName from "../../components/CategoriesNames/CategoriesName";
import { useCourses } from "../../context/VideoProvider";
import ExploreCard from "./ExploreCard/ExploreCard";
const Explore = () => {
  const { courseData } = useCourses();
  return (
    <>
      <div className="explore-container">
        <Sidebar />
        <div className="explore-content">
          {/* <h2>Your Courses</h2> */}
          <h2>Your Courses</h2>
          <CategoriesName />
          <div className="course_list">
            {courseData.map((course, index) => (
              <ExploreCard
                key={index}
                image={course.image}
                category={course.category}
                subjectImage={course.subjectImage}
                title={course.title}
                videoCount={course.videoCount}
                studentCount={course.studentCount}
                ratings={course.ratings}
                price={course.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
