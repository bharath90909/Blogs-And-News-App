import { createContext, useEffect, useState } from "react";

export const BlogsContext = createContext();

import React from "react";

function BlogsProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  const handleDeleteBlog = (selectedBlog) => {
    const updatedBlogs = [...blogs].filter(
      (blog) => blog.title !== selectedBlog.title
    );
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  const fetchBlogs = () => {
    setBlogs(JSON.parse(localStorage.getItem("blogs")) || []);
  };
  useEffect(() => fetchBlogs(), []);
  return (
    <BlogsContext.Provider value={{ blogs, setBlogs, handleDeleteBlog }}>
      {children}
    </BlogsContext.Provider>
  );
}

export default BlogsProvider;
