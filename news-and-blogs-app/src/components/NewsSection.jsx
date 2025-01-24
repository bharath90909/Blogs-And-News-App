import React, { useEffect, useState } from "react";
import "../ui/css/NewsSection.css";

import NewsHeadline from "./NewsHeadline";
import NewsGrid from "./NewsGrid";
import NewsModal from "./NewsModal";
import BookMarks from "./BookMarks";

function NewsSection() {
  return (
    <div>
      <NewsHeadline />
      <NewsGrid />
      {/* <NewsModal /> */}
    </div>
  );
}

export default NewsSection;
