import React from "react";
import "./Card.css";
import TimeStamp from "./TimeStamp";
const Card = ({ title, imageUrl, cardBody }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
      <div className="card-title">
        <p>{title}</p>
        <TimeStamp/>
      </div>
      <div className="cardBody">
        <p>{cardBody}</p>
      </div>
      <div className="card-link">
      <a href="/">Text link</a>
      </div>
      </div>
  
    </div>
  );
};

export default Card;
