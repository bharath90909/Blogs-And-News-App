import React from "react";
import "../ui/css/Modal.css";
import "../ui/css/BookMarks.css";
import demoImage from "../assets/images/demo.jpg";
function BookMarks({ closeBookMark }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={() => closeBookMark(false)}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">Bookmarked News</h2>
        <div className="bookmarks-list">
          <div className="bookmark-item">
            <img src={demoImage} alt="" />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              animi.
            </h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
          <div className="bookmark-item">
            <img src={demoImage} alt="" />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              animi.
            </h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
          <div className="bookmark-item">
            <img src={demoImage} alt="" />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              animi.
            </h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookMarks;
