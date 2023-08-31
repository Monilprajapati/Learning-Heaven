import React from "react";
import "./Coursecard.css";

const Coursecard = ({
  image,
  category,
  subjectImage,
  title,
  videoCount,
  studentCount,
  ratings,
  price,
}) => {
  return (
    <div className="course-card">
      <img src={image} alt="Course Image" />
      <div className="category">
        <div className="subject">
          <h3>{category}</h3>
        </div>
        <img src={subjectImage} alt="Teacher" />
      </div>
      <h2 className="course-title">{title}</h2>
      <div className="course-desc">
        <span>
          <i className="fa-solid fa-video"></i> {videoCount} Videos
        </span>
        <span>
          <i className="fa-solid fa-users"></i> {studentCount} Students
        </span>
      </div>
      <div className="course-ratings">
        <span>
          {ratings} <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          <b>$</b>
          {price}
        </span>
      </div>
    </div>
  );
};

export default Coursecard;
