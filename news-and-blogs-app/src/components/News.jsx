import React from "react";
import Weather from "./Weather";
import Calender from "./Calendar";
import "../ui/css/News.css";
function News() {
  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search News..." />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">User</div>
          <div className="categories">Categories</div>
        </div>
        <div className="news-section">
          <div className="headline">HeadLine</div>
          <div className="news-grid">News Grid</div>
        </div>
        <div className="my-blogs">My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calender />
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  );
}

export default News;
