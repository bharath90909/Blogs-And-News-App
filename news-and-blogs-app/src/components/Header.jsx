import React from "react";
import "../ui/css/Header.css";
function Header() {
  return (
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
  );
}

export default Header;
