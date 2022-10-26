import React from "react";
import "./HelpCard.css";

const HelpCard = ({ title, helpcardBody, shortText, imageUrl }) => {
  return (
    <div className="grid-container">
      <div className="helpcard-container">
        <div className="helpcard-icon">
            <div className="helpcard-icon-bg">
 <img src={imageUrl} alt="" />
            </div>
      
         
        </div>
        <div className="helpcard-textcontainer">
          <div className="helpcard-title">{title}</div>
          <div className="helpcard-body">{helpcardBody}</div>
          <div className="helpcard-a">
            <a href="/">Call Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
