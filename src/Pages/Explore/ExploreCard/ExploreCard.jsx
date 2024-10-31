import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ExploreCard.css";

const ExploreCard = ({ 
  id, 
  img, 
  category, 
  subjectImage, 
  title, 
  videoCount, 
  studentCount, 
  ratings, 
  price, 
  liked, 
  watchLater,
  onLikeClick,
  onWatchLaterClick 
}) => {
  const navigate = useNavigate();
    console.log(id);
  const handleCardClick = (e) => {
    if (e.target.closest('.icons')) {
      return;
    }
    navigate(`/explore/video/${id}`);
  };

  return (
    <div className="course-card" onClick={handleCardClick}>
      <img src={img} alt="Course Image" />
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
        </span>
        <div className="icons">
          <i 
            className='fa-solid fa-heart icon' 
            style={{ color: liked ? "blue" : "gray" }} 
            onClick={onLikeClick}
          />
          <i 
            className='fa-solid fa-clock icon' 
            style={{ color: watchLater ? "blue" : "gray" }} 
            onClick={onWatchLaterClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;