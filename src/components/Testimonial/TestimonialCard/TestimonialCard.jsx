import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({ imageSrc, personName, description, text, rating }) => {
  return (
    <div className="item testimonials-item">
      <div className="profile">
        <div className="profile-image">
          <img src={imageSrc} alt="Profile Image" />
        </div>
        <div className="profile-desc">
          <span>{personName}</span>
          <span>{description}</span>
        </div>
      </div>
      <p>{text}</p>
      <div className="quote">
        <i className="fa fa-quote-left"></i>
      </div>
      <div className="ratings">
        {[...Array(rating)].map((_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
