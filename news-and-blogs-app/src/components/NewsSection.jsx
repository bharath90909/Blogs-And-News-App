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
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);
  return (
    <div className="news-section">
      {isLoading ? (
        <Shimmer />
      ) : (
        <>
          <NewsHeadline
            setCurrentNews={setCurrentNews}
            modalOpen={() => setIsNewsModalOpen(true)}
          />
          <NewsGrid
            setCurrentNews={setCurrentNews}
            modalOpen={() => setIsNewsModalOpen(true)}
          />
        </>
      )}
      {isNewsModalOpen && (
        <NewsModal
          data={currentNews}
          closeModal={() => setIsNewsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default NewsSection;
