import React from "react";
import { img } from "./img/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselEffect.css";

function CarouselEffect() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {img.map((imgsrc, idx) => (
        <div key={idx} className="carousel-slide">
          <img src={imgsrc} alt="" className="carousel-image" />
          <div className="carousel-fade-bottom"></div>
        </div>
      ))}
    </Slider>
    
  );
}

export default CarouselEffect;