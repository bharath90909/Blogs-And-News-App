import React from "react";
import "../ui/css/News.css";
import Header from "./Header";
import NewsContent from "./NewsContent";
import NavBar from "./NavBar";
import NewsSection from "./NewsSection";
import MyBlogs from "./MyBlogs";
import Footer from "./Footer";

function News() {
  return (
    <div className="news-blogs-app">
      <div className="news">
        <Header />
        <NewsContent>
          <NavBar />
          <NewsSection />
          <MyBlogs />
        </NewsContent>
        <Footer />
      </div>
    </div>
  );
}
export default News;
