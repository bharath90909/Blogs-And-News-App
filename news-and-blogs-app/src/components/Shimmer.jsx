import React from "react";
import "../ui/css/Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <div className="news-grid-item shimmer" key={index}>
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
