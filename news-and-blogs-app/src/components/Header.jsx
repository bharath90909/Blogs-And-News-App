import React, { useContext, useRef } from "react";
import "../ui/css/Header.css";
import { NewsContext } from "../context/NewsProvider";
function Header() {
  const { searchQuery, setSearchQuery } = useContext(NewsContext);
  const inputRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      setSearchQuery(inputRef.current.value);
    }
    inputRef.current.value = "";
  };
  return (
    <header className="news-header">
      <h1 className="logo">News & Blogs</h1>
      <div className="search-bar">
        <form>
          <input type="text" ref={inputRef} placeholder="Search News..." />
          <button type="submit" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
