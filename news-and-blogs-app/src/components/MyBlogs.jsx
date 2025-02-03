import React, { useContext, useState } from "react";
import "../ui/css/MyBlogs.css";
import { BlogsContext } from "../context/BlogsProvider";
import BlogModal from "./BlogModal";
import BlogForm from "./BlogForm";
function MyBlogs() {
  const { blogs, handleDeleteBlog } = useContext(BlogsContext);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isBlogEditFormOpen, setIsBlogEditFormOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(null);

  const closeBlogModal = () => {
    setIsBlogModalOpen(false);
    setIsBlogEditFormOpen(false);
    setCurrentBlog(null);
    setCurrentBlogIndex(null);
  };

  const showBlog = (blog) => {
    setCurrentBlog(blog);
    setIsBlogModalOpen(true);
  };

  return (
    <div className="my-blogs">
      <h1 className="my-blogs-heading">My Blogs</h1>
      {blogs.length > 0 ? (
        <div className="blog-posts">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog, index) => {
              return (
                <div className="blog-post" onClick={() => showBlog(blog)}>
                  <img src={blog.image} alt="" />
                  <h3>{blog.title}</h3>
                  <div className="post-buttons">
                    <button
                      className="edit-post"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentBlog(blog);
                        setCurrentBlogIndex(index);

                        setIsBlogEditFormOpen(true);
                      }}
                    >
                      <i className="bx bxs-edit"></i>
                    </button>
                    <button
                      className="delete-post"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteBlog(blog);
                      }}
                    >
                      <i className="bx bxs-x-circle"></i>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <p
          className="no-blogs"
          style={{
            textAlign: "center",
          }}
        >
          No Blogs...
        </p>
      )}

      {isBlogModalOpen && (
        <BlogModal currentBlog={currentBlog} closeModal={closeBlogModal} />
      )}
      {isBlogEditFormOpen && (
        <BlogForm
          currentBlog={currentBlog}
          currentBlogIndex={currentBlogIndex}
          closeModal={closeBlogModal}
        />
      )}
    </div>
  );
}

export default MyBlogs;
