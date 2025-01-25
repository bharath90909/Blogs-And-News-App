import News from "./components/News";
import Blogs from "./components/Blogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsProvider from "./context/NewsProvider";
import AppLayout from "./components/AppLayout";
import BlogsProvider from "./context/BlogsProvider";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);
  return (
    <BlogsProvider>
      <NewsProvider>
        <RouterProvider router={appRouter} />
      </NewsProvider>
    </BlogsProvider>
  );
  // return (
  //   <>
  //     <div className="container">
  //       <div className="news-blogs-app">
  //         {/* <News /> */}
  //         <Blogs />
  //       </div>
  //     </div>
  //   </>
  // );
}

export default App;
