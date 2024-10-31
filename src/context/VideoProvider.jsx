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
    {
      id: 7,
      image: require("../assets/courses/aman.jpeg"),
      category: "Graphic Design",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Advanced Typography and Layout Design",
      videoCount: 32,
      studentCount: "1850+",
      ratings: 4.6,
      price: 134.99,
      liked: false,
      watchLater: false
    },
    {
      id: 8,
      image: require("../assets/courses/aman.jpeg"),
      category: "Graphic Design",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Logo Design Masterclass: From Concept to Creation",
      videoCount: 28,
      studentCount: "3100+",
      ratings: 4.9,
      price: 144.99,
      liked: false,
      watchLater: true
    },
    {
      id: 9,
      image: require("../assets/courses/aman.jpeg"),
      category: "Graphic Design",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Adobe Photoshop: Professional Photo Editing",
      videoCount: 42,
      studentCount: "4500+",
      ratings: 4.7,
      price: 159.99,
      liked: true,
      watchLater: false
    },
    {
      id: 10,
      image: require("../assets/courses/aman.jpeg"),
      category: "Marketing",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Social Media Marketing Excellence",
      videoCount: 35,
      studentCount: "2750+",
      ratings: 4.5,
      price: 129.99,
      liked: false,
      watchLater: true
    },
    {
      id: 11,
      image: require("../assets/courses/aman.jpeg"),
      category: "Marketing",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Email Marketing Campaigns That Convert",
      videoCount: 25,
      studentCount: "1950+",
      ratings: 4.4,
      price: 119.99,
      liked: true,
      watchLater: false
    },
    {
      id: 12,
      image: require("../assets/courses/aman.jpeg"),
      category: "Marketing",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Content Marketing Strategy Masterclass",
      videoCount: 38,
      studentCount: "2200+",
      ratings: 4.6,
      price: 139.99,
      liked: false,
      watchLater: true
    },
    {
      id: 13,
      image: require("../assets/courses/aman.jpeg"),
      category: "Development",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "React.js: Building Modern Web Applications",
      videoCount: 48,
      studentCount: "5200+",
      ratings: 4.8,
      price: 169.99,
      liked: true,
      watchLater: false
    },
    {
      id: 14,
      image: require("../assets/courses/aman.jpeg"),
      category: "Development",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Python Programming: From Basics to Advanced",
      videoCount: 65,
      studentCount: "6100+",
      ratings: 4.9,
      price: 179.99,
      liked: false,
      watchLater: true
    },
    {
      id: 15,
      image: require("../assets/courses/aman.jpeg"),
      category: "Development",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Full Stack JavaScript Development",
      videoCount: 72,
      studentCount: "4800+",
      ratings: 4.7,
      price: 189.99,
      liked: true,
      watchLater: true
    },
    {
      id: 16,
      image: require("../assets/courses/aman.jpeg"),
      category: "Photography",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Portrait Photography Masterclass",
      videoCount: 40,
      studentCount: "2400+",
      ratings: 4.6,
      price: 149.99,
      liked: false,
      watchLater: true
    },
    {
      id: 17,
      image: require("../assets/courses/aman.jpeg"),
      category: "Photography",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Landscape Photography: Capturing Nature",
      videoCount: 35,
      studentCount: "1800+",
      ratings: 4.5,
      price: 134.99,
      liked: true,
      watchLater: false
    },
    {
      id: 18,
      image: require("../assets/courses/aman.jpeg"),
      category: "Photography",
      subjectImage: require("../assets/courses/p2.jpg"),
      title: "Street Photography: Urban Documentation",
      videoCount: 30,
      studentCount: "2100+",
      ratings: 4.4,
      price: 124.99,
      liked: false,
      watchLater: true
    }
  ];
  return <courses.Provider value={{ courseData}}>{children}</courses.Provider>;
};

export default VideoProvider;

export const useCourses = () => {
  return useContext(courses);
};
