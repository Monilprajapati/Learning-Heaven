import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourses } from '../../context/VideoProvider';
import { useUser } from '../../context/UserProvider';
import Sidebar from '../../components/Sidebar/Sidebar';
import './VideoPage.css';

const VideoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { courseData } = useCourses();
  const { wishlist, watchLater, toggleWishlist, toggleWatchLater } = useUser();

  const course = courseData.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="video-page">
      <div className="video-container">
        <Sidebar />
        <div className="video-content">
          <button 
            className="back-button"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
          
          <div className="video-player-section">
            <div className="video-player">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/stmvSgdVciw" // Replace with your video URL
                title="Course Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-details">
            <div className="video-header">
              <h1>{course.title}</h1>
              <div className="video-actions">
                <button 
                  className={`action-btn ${wishlist.includes(course.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(course.id)}
                >
                  <i className="fa-solid fa-heart"></i> {wishlist.includes(course.id) ? 'Liked' : 'Like'}
                </button>
                <button 
                  className={`action-btn ${watchLater.includes(course.id) ? 'active' : ''}`}
                  onClick={() => toggleWatchLater(course.id)}
                >
                  <i className="fa-solid fa-clock"></i> {watchLater.includes(course.id) ? 'Added to Watch Later' : 'Watch Later'}
                </button>
              </div>
            </div>

            <div className="course-info">
              <div className="info-item">
                <i className="fa-solid fa-video"></i>
                <span>{course.videoCount} Videos</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-users"></i>
                <span>{course.studentCount} Students</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-star"></i>
                <span>{course.ratings} Rating</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-tag"></i>
                <span>${course.price}</span>
              </div>
            </div>

            <div className="course-description">
              <h2>About this course</h2>
              <p>This is a detailed description of the course. You can add more information about what students will learn, prerequisites, and other relevant details.</p>
            </div>

            <div className="instructor-info">
              <h2>Instructor</h2>
              <div className="instructor-profile">
                <img src={course.subjectImage} alt="Instructor" />
                <div className="instructor-details">
                  <h3>John Doe</h3>
                  <p>Expert in {course.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;