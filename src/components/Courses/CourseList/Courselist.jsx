import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./Courselist.css";
import { useCourses } from "../../../context/VideoProvider";

const CourseList = () => {
  const { courseData } = useCourses();

  // Get first 6 courses
  const limitedCourses = courseData.slice(0, 6);

  return (
    <div>
      <div className="course-contents">
        {limitedCourses.map((course, index) => (
          <CourseCard
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
  );
};

export default CourseList;
