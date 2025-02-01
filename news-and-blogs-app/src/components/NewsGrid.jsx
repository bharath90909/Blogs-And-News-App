import React, { useContext } from "react";
import "../ui/css/NewsGrid.css";

import noImage from "../assets/images/no-img.png";
import { NewsContext } from "../context/NewsProvider";
import Shimmer from "./Shimmer";

function NewsGrid({ modalOpen, setCurrentNews }) {
  const { news, bookmarks, setBookmarks } = useContext(NewsContext);
  const showNews = (article) => {
    console.log("Inside news grid");
    setCurrentNews(article);
    modalOpen();
  };

  const addToBookMark = (e, selectedArticle) => {
    e.stopPropagation();
    const updatedBookMarks = [...bookmarks, selectedArticle];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookMarks));
    setBookmarks(updatedBookMarks);
  };
  return (
    <div className="news-grid">
      {news &&
        news.length > 0 &&
        news.map((article, index) => {
          return (
            <div
              className="news-grid-item"
              key={index}
              onClick={() => showNews(article)}
            >
              {article.image ? (
                <img src={article.image} alt="News Image" />
              ) : (
                <img src={noImage} alt="News Image"></img>
              )}
              <h3>
                {article.title.slice(0, 50)}
                <i
                  className="fa-regular fa-bookmark bookmark"
                  onClick={(e) => addToBookMark(e, article)}
                ></i>
              </h3>
            </div>
          );
        })}
    </div>
  );
}

export default NewsGrid;
