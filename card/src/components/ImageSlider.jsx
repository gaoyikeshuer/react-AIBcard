import React from "react";
import { useState } from "react";

import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };
  return (
    <div className="card-page">
      <h1 className="card-page-title">{slides[index].title}</h1>  
      <p className="card-page-content">{slides[index].content}</p>
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
