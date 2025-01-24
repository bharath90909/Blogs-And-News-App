import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();

// const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
function NewsProvider({ children }) {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function fetchNews() {
    setIsLoading(true);
    // let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`;

    // if (searchQuery) {
    //   url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apiKey}`;
    // }

    // const response = await axios.get(url);
    // const fetchedNews = response.data.articles;
    // setHeadline(fetchedNews[0]);
    // setNews(fetchedNews.slice(1, 7));
    // setIsLoading(false);
  }
  useEffect(() => {
    fetchNews();
    console.log("Inside Effect");
  }, [category, searchQuery]);
  return (
    <NewsContext.Provider
      value={{
        headline,
        news,
        isLoading,
        searchQuery,
        setSearchQuery,
        setCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
