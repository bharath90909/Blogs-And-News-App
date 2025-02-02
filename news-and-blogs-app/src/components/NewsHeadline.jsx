import React, { useContext } from "react";
import "../ui/css/NewsHeadline.css";
import Shimmer from "./Shimmer";
import techImg from "../assets/images/tech.jpg";
import { NewsContext } from "../context/NewsProvider";
import { isBookmarked } from "../utils/utils";
import noImage from "../assets/images/no-img.png";

function NewsHeadline({ modalOpen, setCurrentNews }) {
  const { headline, bookmarks, setBookmarks } = useContext(NewsContext);
  // return isLoading ? (
  //   <p>Loading..</p>
  // ) : (
  //   headline && (
  //     <div className="headline">
  //       <img src={headline.image} alt="Headline-Image" />
  //       <div className="headline-title">
  //         {headline.title}
  //         <i className="fa-regular fa-bookmark bookmark"></i>
  //       </div>
  //     </div>
  //   )
  // );
  const showHeadLine = () => {
    setCurrentNews(headline);
    modalOpen();
  };

  const handleBookMark = (e) => {
    e.stopPropagation();
    let updatedBookMarks = [...bookmarks];
    if (isBookmarked(headline)) {
      updatedBookMarks = updatedBookMarks.filter(
        (bookmark) => bookmark.title !== headline.title
      );
    } else {
      updatedBookMarks.push(headline);
    }
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookMarks));
    setBookmarks(updatedBookMarks);
  };
  return (
    <div className="headline" onClick={showHeadLine}>
      {console.log("Renderd")}
      {headline?.image ? (
        <img src={headline.image} alt="Headline-Image" />
      ) : (
        <img src={noImage} alt="Headline-Image" />
      )}
      <div className="headline-title">
        {headline?.title}
        {isBookmarked(headline) ? (
          <i
            className="fa-solid fa-bookmark bookmark"
            onClick={handleBookMark}
          ></i>
        ) : (
          <i
            className="fa-regular fa-bookmark bookmark"
            onClick={handleBookMark}
          ></i>
        )}
      </div>
    </div>
  );
}

export default NewsHeadline;
