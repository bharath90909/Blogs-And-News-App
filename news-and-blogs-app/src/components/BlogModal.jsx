import React from "react";
import "../ui/css/Modal.css";
import "../ui/css/BlogModal.css";
function BlogModal({ currentBlog, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={() => closeModal()}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img
          src={currentBlog.image}
          alt="modal image"
          className="blog-modal-image"
        />
        <h2 className="blog-modal-title">{currentBlog.title}</h2>
        <p className="blog-modal-content-text">{currentBlog.content}</p>
      </div>
    </div>
  );
}

export default BlogModal;
