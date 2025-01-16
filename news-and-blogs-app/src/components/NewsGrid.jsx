import React from "react";
import "../ui/css/NewsGrid.css";

import techImg from "../assets/images/tech.jpg";
import sportsImg from "../assets/images/sports.jpg";
import scienceImg from "../assets/images/science.jpg";
import worldImg from "../assets/images/world.jpg";
import healthImg from "../assets/images/health.jpg";
import nationImg from "../assets/images/nation.jpg";
function NewsGrid() {
  return (
    <div className="news-grid">
      <div className="news-grid-item">
        <img src={techImg} alt="News Image" />
        <h3>
          Lorem ipsum dolor sit amet.{" "}
          <i className="fa-regular fa-bookmark bookmark"></i>
        </h3>
      </div>
      <div className="news-grid-item">
        <img src={sportsImg} alt="News Image" />
        <h3>
          Lorem ipsum dolor sit amet.{" "}
          <i className="fa-regular fa-bookmark bookmark"></i>
        </h3>
      </div>
      <div className="news-grid-item">
        <img src={scienceImg} alt="News Image" />
        <h3>
          ko Lorem ipsum dolor sit amet.{" "}
          <i className="fa-regular fa-bookmark bookmark"></i>
        </h3>
      </div>
      <div className="news-grid-item">
        <img src={worldImg} alt="News Image" />
        <h3>
          Lorem ipsum dolor sit amet.{" "}
          <i className="fa-regular fa-bookmark bookmark"></i>
        </h3>
      </div>
      <div className="news-grid-item">
        <img src={healthImg} alt="News Image" />
        <h3>
          Lorem ipsum dolor sit amet.{" "}
          <i className="fa-regular fa-bookmark bookmark"></i>
        </h3>
      </div>
      <div className="news-grid-item">
        <img src={nationImg} alt="News Image" />
        <h3>
          Lorem ipsum dolor sit amet.{" "}
          <i className="fa-regular fa-bookmark bookmark"></i>
        </h3>
      </div>
    </div>
  );
}

export default NewsGrid;
