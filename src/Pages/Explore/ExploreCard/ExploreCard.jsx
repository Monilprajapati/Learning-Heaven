import React, { useState } from 'react'
import { useCourses } from '../../../context/VideoProvider';
import "./ExploreCard.css"

const ExploreCard = ({ img, category, subjectImage, title, videoCount, studentCount, ratings, price, liked, watchLater }) => {

    const [islike, setLike] = useState(liked);
    const [iswatchLater, setWatchLater] = useState(watchLater);

    // const {likedVideos, setLikedVideos, watchLaterVideos, setWatchLaterVideos} = useCourses();
    
    return (
        <div className="course-card">
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
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </span>
                <div className="icons">
                    <i className='fa-solid fa-clock icon' style={islike ? { color: "blue" } : { color: "gray" }} onClick={() => setLike(!islike)}></i>
                    <i className='fa-solid fa-heart icon' style={iswatchLater ? { color: "blue" } : { color: "gray" }} onClick={() => setWatchLater(!iswatchLater)}></i>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard