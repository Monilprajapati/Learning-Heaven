import React from "react";
import "./TestimonialList.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialList = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad : true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    sidesToScroll: 1,
    pauseOnHover: true,
    lazyLoad : true,
    cssEase: "linear",
  };
  // Testimonial objects
  const testimonials = [
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Raj Mehta",
      description: "Web Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Ajay Gohil",
      description: "Website Designer",
      text: "Lorem ipsm dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Aeni Parmar",
      description: "Health Coach",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Vivek Jadav",
      description: "Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Madhav Rajpura",
      description: "Photographer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Swapnil Singh",
      description: "Gym coach",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    // Add more testimonial objects as needed
  ];
  return (
    <Slider {...settings} className="testimonials-slider">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </Slider>
  );
};

export default TestimonialList;
