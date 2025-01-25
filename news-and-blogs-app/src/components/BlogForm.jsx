import React, { useContext, useState } from "react";
import { BlogsContext } from "../context/BlogsProvider";
import "../ui/css/Modal.css";
import "../ui/css/BlogForm.css";

function BlogForm({ currentBlog, currentBlogIndex: index, closeModal }) {
  const { blogs, setBlogs } = useContext(BlogsContext);
  const [title, setTitle] = useState(currentBlog.title);
  const [content, setContent] = useState(currentBlog.content);
  const [image, setImage] = useState(currentBlog.image);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim() && image) {
      const newBlog = {
        title,
        image,
        content,
      };
      const updatedBlogs = [...blogs];
      updatedBlogs.splice(index, 1, newBlog);
      console.log("Updated Blogs:", updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setBlogs(updatedBlogs);
      setTitle("");
      setContent("");
      setImage(null);
      closeModal();
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-blog-form">
        <div className="modal-blog-form-content">
          <h1>Edit Post</h1>
          <span className="close-button" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <form onSubmit={handleSubmit}>
            <div className="img-upload">
              <label htmlFor="file-upload" className="file-upload">
                {!image ? <i className="bx bx-upload"></i> : <i>✔️</i>}
                Upload Image
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleImageChange}
              />
            </div>
            <input
              type="text"
              placeholder="Add Title "
              className="title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Add Text"
              className="text-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="submit-btn" type="submit">
              Edit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
