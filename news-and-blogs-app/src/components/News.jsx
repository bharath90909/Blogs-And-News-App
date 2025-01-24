import React from "react";
import "../ui/css/News.css";
import Header from "./Header";
import NewsContent from "./NewsContent";
import NavBar from "./NavBar";
import NewsSection from "./NewsSection";
import Blogs from "./Blogs";
import Footer from "./Footer";

// function News() {
//   return (
//     <div className="news">
//       {/* Header */}
//       <header className="news-header">
//         <h1 className="logo">News & Blogs</h1>
//         <div className="search-bar">
//           <form>
//             <input type="text" placeholder="Search News..." />
//             <button type="submit">
//               <i className="fa-solid fa-magnifying-glass"></i>
//             </button>
//           </form>
//         </div>
//       </header>
//       <NewsContent>
//         <NavBar></NavBar>
//         <NewsSection></NewsSection>
//       </NewsContent>
//       <div className="news-content">
//         <div className="navbar">
//           <div className="user">
//             <img src={userImage} alt="user image" />
//             <p>Mary's Blog</p>
//           </div>
//           <div className="categories">
//             <h1 className="nav-heading">Categories</h1>
//             <div className="nav-links">
//               <a href="" className="nav-link">
//                 General
//               </a>
//               <a href="" className="nav-link">
//                 World
//               </a>
//               <a href="" className="nav-link">
//                 Business
//               </a>
//               <a href="" className="nav-link">
//                 Technology
//               </a>
//               <a href="" className="nav-link">
//                 Entertainment
//               </a>
//               <a href="" className="nav-link">
//                 Sports
//               </a>
//               <a href="" className="nav-link">
//                 Science
//               </a>
//               <a href="" className="nav-link">
//                 Health
//               </a>
//               <a href="" className="nav-link">
//                 Nation
//               </a>
//               <a href="" className="nav-link">
//                 Bookmarks <i className="fa-regular fa-bookmark"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="news-section">
//           <div className="headline">
//             <img src={techImg} alt="Headline-Image" />
//             <div className="headline-title">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Molestiae, in.
//               <i className="fa-regular fa-bookmark bookmark"></i>
//             </div>
//           </div>
//           <div className="news-grid">
//             <div className="news-grid-item">
//               <img src={techImg} alt="News Image" />
//               <h3>
//                 Lorem ipsum dolor sit amet.{" "}
//                 <i className="fa-regular fa-bookmark bookmark"></i>
//               </h3>
//             </div>
//             <div className="news-grid-item">
//               <img src={sportsImg} alt="News Image" />
//               <h3>
//                 Lorem ipsum dolor sit amet.{" "}
//                 <i className="fa-regular fa-bookmark bookmark"></i>
//               </h3>
//             </div>
//             <div className="news-grid-item">
//               <img src={scienceImg} alt="News Image" />
//               <h3>
//                 ko Lorem ipsum dolor sit amet.{" "}
//                 <i className="fa-regular fa-bookmark bookmark"></i>
//               </h3>
//             </div>
//             <div className="news-grid-item">
//               <img src={worldImg} alt="News Image" />
//               <h3>
//                 Lorem ipsum dolor sit amet.{" "}
//                 <i className="fa-regular fa-bookmark bookmark"></i>
//               </h3>
//             </div>
//             <div className="news-grid-item">
//               <img src={healthImg} alt="News Image" />
//               <h3>
//                 Lorem ipsum dolor sit amet.{" "}
//                 <i className="fa-regular fa-bookmark bookmark"></i>
//               </h3>
//             </div>
//             <div className="news-grid-item">
//               <img src={nationImg} alt="News Image" />
//               <h3>
//                 Lorem ipsum dolor sit amet.{" "}
//                 <i className="fa-regular fa-bookmark bookmark"></i>
//               </h3>
//             </div>
//           </div>
//         </div>
//         <Blogs />
//         <div className="my-blogs">My Blogs</div>
//         <div className="weather-calendar">
//           <Weather />
//           <Calender />
//         </div>
//       </div>
//       <Footer />
//       <footer className="news-footer">Footer</footer>
//     </div>
//   );
// }

function News() {
  return (
    <div className="news-blogs-app">
      <div className="news">
        <Header />
        <NewsContent>
          <NavBar />
          <NewsSection />
          {/* <Blogs /> */}
          <div className="my-blogs">My Blogs</div>;
        </NewsContent>
        <Footer />
      </div>
    </div>
  );
}
export default News;
