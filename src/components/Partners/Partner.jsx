import React from "react";
import "./Partner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "#ffffff" }}
//       onClick={onClick}
//     />
//   );
// }

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  sidesToScroll: 1,
  pauseOnHover: true,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  cssEase: "linear",
};

const Partners = () => {
  const brandLogos = [
    {
      imageSrc: require("../../images/brand-logos/group.png"),
      altText: "Group",
    },
    {
      imageSrc: require("../../images/brand-logos/passport.png"),
      altText: "Passport",
    },
    {
      imageSrc: require("../../images/brand-logos/lowes.png"),
      altText: "Lowes",
    },
    {
      imageSrc: require("../../images/brand-logos/telia.png"),
      altText: "Telia",
    },
    {
      imageSrc: require("../../images/brand-logos/fakery.png"),
      altText: "Fakery",
    },
    {
      imageSrc: require("../../images/brand-logos/lowe.png"),
      altText: "Lowe",
    },
  ];

  return (
    <>
      <section className="partners">
        <h3>Our trusted partners around the world</h3>
        <Slider {...settings} className="partners-slider">
          {brandLogos.map((logo, index) => (
            <div className="item brand-item" key={index}>
              <img src={logo.imageSrc} alt={logo.altText} />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Partners;
