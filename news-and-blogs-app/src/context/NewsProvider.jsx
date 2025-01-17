import React, { createContext } from "react";
import axios from "axios";
export const NewsContext = createContext();

function NewsProvider({ children }) {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  useEffect(() => {}, []);
  return <NewsContext.Provider>{children}</NewsContext.Provider>;
}

export default NewsProvider;
