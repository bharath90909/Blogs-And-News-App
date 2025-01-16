import React from "react";
import Weather from "./Weather";
import Calender from "./Calendar";
import "../ui/css/NewsContent.css";

function NewsContent({ children }) {
  return (
    <div className="news-content">
      {children}
      <div className="weather-calendar">
        <Weather />
        <Calender />
      </div>
    </div>
  );
}

export default NewsContent;
