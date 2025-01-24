import React, { useContext } from "react";
import "../ui/css/NewsHeadline.css";

import techImg from "../assets/images/tech.jpg";
import { NewsContext } from "../context/NewsProvider";

function NewsHeadline() {
  const { headline, isLoading } = useContext(NewsContext);
  return isLoading ? (
    <p>Loading..</p>
  ) : (
    headline && (
      <div className="headline">
        <img src={headline.image} alt="Headline-Image" />
        <div className="headline-title">
          {headline.title}
          <i className="fa-regular fa-bookmark bookmark"></i>
        </div>
      </div>
    )
  );
}

export default NewsHeadline;
