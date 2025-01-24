import React from "react";
import "../ui/css/NewsModal.css";
import "../ui/css/Modal.css";

import demoImage from "../assets/images/demo.jpg";
function NewsModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={demoImage} alt="modal image" className="modal-image" />
        <h2 className="modal-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          fugiat dolore iure error! Ducimus, quos.
        </h2>
        <p className="modal-source">Source: The Gaurdain</p>
        <p className="modal-date">Jan 24 2025 11:08AM</p>
        <p className="modal-content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          earum obcaecati ipsa aut, est itaque velit distinctio impedit maxime
          eveniet vel dolor, molestias neque unde recusandae necessitatibus
          dolorum nesciunt eaque!
        </p>
        <a
          href="https://www.github.com/bharath90909"
          className="read-more-link"
          target="__blank"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsModal;
