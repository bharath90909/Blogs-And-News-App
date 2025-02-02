import React, { useState } from "react";
import { BlogsContext } from "../context/BlogsProvider";
import "../ui/css/Blogs.css";
import userImage from "../assets/images/user2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
function Blogs() {
  const [showForm, setShowForm] = useState(false);
  const { blogs, setBlogs } = useContext(BlogsContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim() && image) {
      const newBlog = {
        title,
        image,
        content,
      };
      localStorage.setItem("blogs", JSON.stringify([...blogs, newBlog]));
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      navigate("/news");
      setTitle("");
      setContent("");
      setImage(null);
      setTimeout(() => setShowForm(false), 300);
      console.log("Inside Post Submit");
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
    <div className="news-blogs-app">
      <div className="blogs">
        <div className="blogs-left">
          <img src={userImage} alt="User Image" />
        </div>
        <div className="blogs-right">
          {!showForm ? (
            <>
              <button className="post-btn" onClick={() => setShowForm(true)}>
                Create New Post
              </button>
              <Link to="/news" className="close-btn">
                <button className="close-btn">
                  Back <i className="bx bx-chevron-right"></i>
                </button>
              </Link>
            </>
          ) : (
            <div className="blogs-right-form">
              <h1>New Post</h1>
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
                  Submit Post
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
