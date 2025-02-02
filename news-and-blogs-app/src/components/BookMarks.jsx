import React, { useContext } from "react";
import "../ui/css/Modal.css";
import "../ui/css/BookMarks.css";
import demoImage from "../assets/images/demo.jpg";
import { NewsContext } from "../context/NewsProvider";

function BookMarks({ closeBookMark }) {
  const { bookmarks, setBookmarks } = useContext(NewsContext);
  const handleDeleteBookMark = (e, selectedBookMark) => {
    e.stopPropagation();
    const updatedBookMarks = [...bookmarks].filter(
      (bookmark) =>
        bookmark.title.toLowerCase() !== selectedBookMark.title.toLowerCase()
    );
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookMarks));
    setBookmarks(updatedBookMarks);
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={() => closeBookMark(false)}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">Bookmarked News</h2>
        <div className="bookmarks-list">
          {bookmarks &&
            bookmarks.length > 0 &&
            bookmarks.map((bookMark) => {
              return (
                <div className="bookmark-item">
                  <img src={bookMark.image} alt="" />
                  <a href={bookMark.url} target="__blank">
                    <h3>{bookMark.title}</h3>
                  </a>

                  <span
                    className="delete-button"
                    onClick={(e) => handleDeleteBookMark(e, bookMark)}
                  >
                    <i className="fa-regular fa-circle-xmark"></i>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BookMarks;
