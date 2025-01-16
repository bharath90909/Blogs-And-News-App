import React from "react";
import "../ui/css/NewsSection.css";

import NewsHeadline from "./NewsHeadline";
import NewsGrid from "./NewsGrid";

function NewsSection() {
  return (
    <div>
      <NewsHeadline />
      <NewsGrid />
    </div>
  );
}

export default NewsSection;
