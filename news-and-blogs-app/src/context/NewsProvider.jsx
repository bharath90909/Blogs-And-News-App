import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();

const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
function NewsProvider({ children }) {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );
  async function fetchNews() {
    setIsLoading(true);
    let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`;

    if (searchQuery) {
      url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apiKey}`;
    }

    const response = await axios.get(url);
    const fetchedNews = response.data.articles;
    setHeadline(fetchedNews[0]);
    setNews(fetchedNews.slice(1, 7));
    setIsLoading(false);
  }
  useEffect(() => {
    fetchNews();
  }, [category, searchQuery]);
  useEffect(() => {
    setSearchQuery("");
  }, [category]);
  return (
    <NewsContext.Provider
      value={{
        headline,
        news,
        isLoading,
        searchQuery,
        setSearchQuery,
        setCategory,
        category,
        bookmarks,
        setBookmarks,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
