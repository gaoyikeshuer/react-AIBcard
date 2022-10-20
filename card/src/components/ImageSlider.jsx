import React from "react";
import { useState } from "react";
import CardPage from "./CardPage";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [dotActive, setDotActive] = useState(true);
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };
  return (
    <div className="card-page">
      <CardPage slides={slides} index={index} />
      <div className="card-bottom">
        <div className="button">
          <span>Sign Up to AIB</span>
        </div>
        <div className="dotsContainer">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={index === slideIndex ? "circle-active" : "circle"}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
