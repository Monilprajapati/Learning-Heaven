import React from "react";
import { createContext, useContext } from "react";

const courses = createContext();

const VideoProvider = ({ children }) => {
  const courseData = [
    {
      image: require("../assets/courses/aman.jpeg"),
      category: "Development",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Learn Figma: This is some dummy text demonstrating the title",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.9,
      price: 120.0,
    },
    {
      image: require("../assets/courses/aman.jpeg"),
      category: "Marketing",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Master the Six Basic Rules of Investing by Robert Kiyosaki",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.9,
      price: 120.0,
    },
    {
      image: require("../assets/courses/aman.jpeg"),
      category: "Graphic Design",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Learn Figma: This is some dummy text demonstrating the title",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.9,
      price: 120.0,
    },
    {
      image: require("../assets/courses/aman.jpeg"),
      category: "Marketing",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Learn Figma: This is some dummy text demonstrating the title",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.9,
      price: 120.0,
    },
    {
      image: require("../assets/courses/aman.jpeg"),
      category: "Photography",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Learn Figma: This is some dummy text demonstrating the title",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.9,
      price: 120.0,
    },
    {
      image: require("../assets/courses/aman.jpeg"),
      category: "Development",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Learn Figma: This is some dummy text demonstrating the title",
      videoCount: 45,
      studentCount: "2154+",
      ratings: 4.9,
      price: 120.0,
    },
  ];
  return <courses.Provider value={{ courseData }}>{children}</courses.Provider>;
};

export default VideoProvider;

export const useCourses = () => {
  return useContext(courses);
};
