import React from "react";
import { useCourses } from "../../context/VideoProvider";
import "./Likedvideos.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ExploreCard from "../Explore/ExploreCard/ExploreCard";

const Likedvideos = () => {

  const { courseData } = useCourses();
  return (
    <div className="likedvideo-page">

      <div className="likedvideos">
        <Sidebar />
        <div className="course_list" style={{ marginLeft: "50px", marginTop: "40px" }}>
          {
            courseData.map((course, index) => {
              course.liked ? (
                <ExploreCard
                  key={index}
                  img={course.image}
                  category={course.category}
                  subjectImage={course.subjectImage}
                  title={course.title}
                  videoCount={course.videoCount}
                  studentCount={course.studentCount}
                  ratings={course.ratings}
                  price={course.price}
                  liked={course.liked}
                  watchLater={course.watchLater}
                />
              ) : (
                <div>
                  No liked video
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Likedvideos;
