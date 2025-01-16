import React from "react";
import "../ui/css/NewsHeadline.css";

import techImg from "../assets/images/tech.jpg";

function NewsHeadline() {
  return (
    <div className="headline">
      <img src={techImg} alt="Headline-Image" />
      <div className="headline-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, in.
        <i className="fa-regular fa-bookmark bookmark"></i>
      </div>
    </div>
  );
}

export default NewsHeadline;
