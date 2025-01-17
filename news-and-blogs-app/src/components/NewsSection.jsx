import React, { useEffect, useState } from "react";
import "../ui/css/NewsSection.css";

import NewsHeadline from "./NewsHeadline";
import NewsGrid from "./NewsGrid";

function NewsSection() {
  async function fetchNews() {}

  return (
    <div>
      <NewsHeadline />
      <NewsGrid />
    </div>
  );
}

export default NewsSection;
