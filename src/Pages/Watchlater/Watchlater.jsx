import React from "react";
import "./Watchlater.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useCourses } from "../../context/VideoProvider";
import { useUser } from "../../context/UserProvider";
import ExploreCard from "../Explore/ExploreCard/ExploreCard";

const Watchlater = () => {
  const { courseData } = useCourses();
  const { wishlist, watchLater, toggleWishlist, toggleWatchLater } = useUser();

  const watchLaterCourses = courseData.filter(course => watchLater.includes(course.id));

  return (
    <div className="explore-container">
      <Sidebar />
      <div className="explore-content">
        <h2>Watch Later</h2>
        <div className="course_list">
          {watchLaterCourses.length > 0 ? (
            watchLaterCourses.map((course, index) => (
              <ExploreCard
                id={course.id}
                key={index}
                img={course.image}
                category={course.category}
                subjectImage={course.subjectImage}
                title={course.title}
                videoCount={course.videoCount}
                studentCount={course.studentCount}
                ratings={course.ratings}
                price={course.price}
                liked={wishlist.includes(course.id)}
                watchLater={watchLater.includes(course.id)}
                onLikeClick={() => toggleWishlist(course.id)}
                onWatchLaterClick={() => toggleWatchLater(course.id)}
              />
            ))
          ) : (
            <div>No videos in watch later</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watchlater;
