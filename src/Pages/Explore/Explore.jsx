import React from "react";
import "./Explore.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CategoriesName from "./components/CategoriesNames/CategoriesName";
import { useCourses } from "../../context/VideoProvider";
import ExploreCard from "./ExploreCard/ExploreCard";
import { useUser } from "../../context/UserProvider";

const Explore = () => {
  const { courseData } = useCourses();
  const { wishlist, watchLater, toggleWishlist, toggleWatchLater } = useUser();
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  console.log("Total courses in courseData:", courseData.length);
  console.log("Full courseData:", courseData);

  const filteredCourses =
    selectedCategory === "all"
      ? courseData
      : courseData.filter(
          (course) => course.category === selectedCategory
        );
      
  return (
    <>
      <div className="explore-container">
        <Sidebar />
        <div className="explore-content">
          <h2>Your Courses</h2>
          <CategoriesName onCategorySelect={setSelectedCategory} />
          <div className="course_list">
            {filteredCourses.map((course, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
