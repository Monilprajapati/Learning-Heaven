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
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    sidesToScroll: 1,
    pauseOnHover: true,
    lazyLoad: true,
    cssEase: "linear",
  };

  // Testimonial objects
  const testimonials = [
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Raj Mehta",
      description: "Web Developer",
      text: "I was blown away by the depth of knowledge and practical insights provided in the web development course. It truly transformed my approach to coding, and now I feel more confident in creating dynamic and responsive websites. The instructor's teaching style made complex concepts easy to understand. Highly recommended!",
      rating: 5,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Ajay Gohil",
      description: "Website Designer",
      text: "Embarking on the journey of website design with this course was a game-changer for me. The hands-on projects and real-world applications provided a solid foundation for creating visually stunning websites. The instructor's expertise and guidance were invaluable. I'm now more confident in delivering top-notch designs.",
      rating: 4,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Aeni Parmar",
      description: "Health Coach",
      text: "As a health coach, I found the course content to be incredibly insightful and applicable to my profession. The holistic approach to health and wellness resonated with me, and I gained practical strategies to enhance my coaching practice. The community support and engagement added immense value to the learning experience.",
      rating: 5,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Vivek Jadav",
      description: "Student",
      text: "Being a student in this course was a fantastic experience. The engaging lectures and interactive assignments made learning enjoyable. I appreciated the flexibility to study at my own pace, and the comprehensive curriculum gave me a solid foundation. I highly recommend this course to fellow students.",
      rating: 5,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Madhav Rajpura",
      description: "Photographer",
      text: "This photography course exceeded my expectations. The in-depth discussions on composition and lighting greatly enhanced my skills. The instructor's feedback was invaluable, and the community of photographers provided a supportive learning environment. I'm now more confident and inspired in my photography endeavors.",
      rating: 4,
    },
    {
      imageSrc: require("../../../images/testimonials/student-1.jpg"),
      personName: "Swapnil Singh",
      description: "Gym Coach",
      text: "As a gym coach, I found immense value in this course. The fitness strategies and coaching techniques presented were both practical and effective. The course not only improved my training methods but also helped me connect with clients on a deeper level. I highly recommend it to fellow fitness professionals.",
      rating: 5,
    },
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
