import React, { useContext, useState } from "react";
import userImage from "../assets/images/user2.jpg";
import "../ui/css/NavBar.css";
import { NewsContext } from "../context/NewsProvider";
import BookMarks from "./BookMarks";
import { Link } from "react-router-dom";
const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

function NavBar() {
  const { category: currentCategory, setCategory } = useContext(NewsContext);
  const [isBookMarksOpen, setIsBookMarksOpen] = useState(false);
  return (
    <div className="navbar">
      <Link to="/blogs" className="user">
        <div className="user">
          <img src={userImage} alt="user image" />
          <p>Bharath's Blog</p>
        </div>
      </Link>
      <div className="categories">
        <h1 className="nav-heading">Categories</h1>
        <div className="nav-links">
          {categories.map((category, index) => (
            <p
              className={`nav-link ${
                category === currentCategory ? "active-link" : ""
              }`}
              key={index}
              onClick={() => setCategory(category)}
            >
              {category}
            </p>
          ))}
          <p className="nav-link" onClick={() => setIsBookMarksOpen(true)}>
            Bookmarks <i className="fa-regular fa-bookmark"></i>
          </p>
        </div>
      </div>
      {isBookMarksOpen && <BookMarks closeBookMark={setIsBookMarksOpen} />}
    </div>
  );
}

export default NavBar;
