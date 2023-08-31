import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./Courselist.css";
import { useCourses } from "../../../context/VideoProvider";

const CourseList = () => {
  const { courseData } = useCourses();

  return (
    <div>
      <div class="course-contents">
        {courseData.map((course, index) => (
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
