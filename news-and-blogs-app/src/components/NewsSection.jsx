import React, { useContext, useEffect, useState } from "react";
import "../ui/css/NewsSection.css";

import NewsHeadline from "./NewsHeadline";
import NewsGrid from "./NewsGrid";
import NewsModal from "./NewsModal";
import BookMarks from "./BookMarks";
import { NewsContext } from "../context/NewsProvider";
import Shimmer from "./Shimmer";

function NewsSection() {
  const { isLoading } = useContext(NewsContext);
  return (
    <div className="news-section">
      {isLoading ? (
        <Shimmer />
      ) : (
        <>
          <NewsHeadline />
          <NewsGrid />
        </>
      )}
    </div>
  );
}

export default NewsSection;
