import React from "react";
import "../ui/css/NewsModal.css";
import "../ui/css/Modal.css";
import noImage from "../assets/images/no-img.png";

import demoImage from "../assets/images/demo.jpg";
function NewsModal({ data, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark" onClick={closeModal}></i>
        </span>
        {data?.image ? (
          <img src={data.image} alt="modal image" className="modal-image" />
        ) : (
          <img src={noImage} alt="modal image" className="modal-image" />
        )}
        <h2 className="modal-title">{data.title}</h2>
        <p className="modal-source">Source: {data.source.name}</p>
        <p className="modal-content-text">{data.content}</p>
        <a href={data.url} className="read-more-link" target="__blank">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsModal;
