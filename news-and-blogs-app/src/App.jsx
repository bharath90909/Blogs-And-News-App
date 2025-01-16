import { useState } from "react";
import News from "./components/News";

function App() {
  return (
    <>
      <div className="container">
        <div className="news-blog-app">
          <News />
        </div>
      </div>
    </>
  );
}

export default App;
