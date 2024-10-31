import React from "react";
import { createContext, useContext, useState } from "react";

const courses = createContext();

const VideoProvider = ({ children }) => {

  // const [likeVideos, setLikedVideos] = useState([]);
  // const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  // const likedVideosFunction = (prev) => {
  //   setLikedVideos({ ...prev, likeVideos });
  // }

  // const watchLaterVideosFunction = (prev) => {
  //   setWatchLaterVideos({ ...prev, watchLaterVideos });
  // }
  const courseData = [
    {
      id: 1,
      image: require("../assets/courses/aman.jpeg"),
      category: "Graphic Design",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Creative Adobe Illustrator Mastery",
      videoCount: 15,
      studentCount: "2800+",
      ratings: 4.7,
      price: 129.99,
      liked:false,
      watchLater:true
    },
    {
      id: 2,
      image: require("../assets/courses/aman.jpeg"),
      category: "Marketing",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Introduction to Digital Marketing Strategies",
      videoCount: 28,
      studentCount: "4200+",
      ratings: 4.3,
      price: 159.99,
      liked:true,
      watchLater:false
    },
    {
      id: 3,
      image: require("../assets/courses/aman.jpeg"),
      category: "Graphic Design",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Learn Figma: This is some dummy text demonstrating the title",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.1,
      price: 120.0,
      liked:false,
      watchLater:true
    },
    {
      id: 4,
      image: require("../assets/courses/aman.jpeg"),
      category: "Development",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Mastering HTML and CSS for Beginners",
      videoLink: "https://www.youtube.com/watch?v=your-html-css-course-video-link",
      videoCount:30,
      studentCount: "3500+",
      ratings: 4.8,
      price: 149.99,
      liked:false,
      watchLater:false
    },
    {
      id: 5,
      image: require("../assets/courses/aman.jpeg"),
      category: "Photography",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Essentials of Photography Composition",
      videoCount: 57,
      studentCount: "3200+",
      ratings: 4.8,
      price: 139.99,
      liked:true,
      watchLater:true
    },
    {
      id: 6,
      image: require("../assets/courses/aman.jpeg"),
      category: "Development",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Learn Figma: This is some dummy text demonstrating the title",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.9,
      price: 120.0,
      liked:false,
      watchLater:false
    },
  ];
  return <courses.Provider value={{ courseData}}>{children}</courses.Provider>;
};

export default VideoProvider;

export const useCourses = () => {
  return useContext(courses);
};
