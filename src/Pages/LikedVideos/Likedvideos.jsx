import React from "react";
import "./Likedvideos.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useCourses } from "../../context/VideoProvider";
import { useUser } from "../../context/UserProvider";
import ExploreCard from "../Explore/ExploreCard/ExploreCard";

const Likedvideos = () => {
  const { courseData } = useCourses();
  
  const { wishlist, watchLater, toggleWishlist, toggleWatchLater } = useUser();

  const likedCourses = courseData.filter(course => wishlist.includes(course.id));

  return (
    <div className="explore-container">
      <Sidebar />
      <div className="explore-content">
        <h2>Liked Videos</h2>
        <div className="course_list">
          {likedCourses.length > 0 ? (
            likedCourses.map((course, index) => (
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
            <div>No liked videos</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Likedvideos;
