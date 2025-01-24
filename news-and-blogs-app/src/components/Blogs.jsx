import React from "react";
import "../ui/css/Blogs.css";
import userImage from "../assets/images/user.jpg";
function Blogs() {
  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src={userImage} alt="User Image" />
      </div>
      <div className="blogs-right">
        {/* <button className="post-btn">Create New Post</button>
        <button className="close-btn">
          Back <i className="bx bx-chevron-right"></i>
        </button> */}
        <div className="blogs-right-form">
          <h1>New Post</h1>
          <form>
            <div className="img-upload">
              <label htmlFor="file-upload" className="file-upload">
                <i className="bx bx-upload"></i>Upload Image
              </label>
              <input type="file" id="file-upload" />
            </div>
            <input
              type="text"
              placeholder="Add Title "
              className="title-input"
            />
            <textarea placeholder="Add Text" className="text-input"></textarea>
            <button className="submit-btn" type="submit">
              Submit Button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
