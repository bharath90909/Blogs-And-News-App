import React from "react";
import userImage from "../assets/images/user.jpg";
import "../ui/css/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="user">
        <img src={userImage} alt="user image" />
        <p>Mary's Blog</p>
      </div>
      <div className="categories">
        <h1 className="nav-heading">Categories</h1>
        <div className="nav-links">
          <a href="" className="nav-link">
            General
          </a>
          <a href="" className="nav-link">
            World
          </a>
          <a href="" className="nav-link">
            Business
          </a>
          <a href="" className="nav-link">
            Technology
          </a>
          <a href="" className="nav-link">
            Entertainment
          </a>
          <a href="" className="nav-link">
            Sports
          </a>
          <a href="" className="nav-link">
            Science
          </a>
          <a href="" className="nav-link">
            Health
          </a>
          <a href="" className="nav-link">
            Nation
          </a>
          <a href="" className="nav-link">
            Bookmarks <i className="fa-regular fa-bookmark"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
