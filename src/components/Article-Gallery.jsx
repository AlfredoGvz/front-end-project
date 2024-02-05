import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./Article-card";

export default function ArticleGallery() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://north-star-articles.onrender.com/api/articles")
      .then(({ data }) => setArticles(data.articles));
  }, []);
  return (
    <div className="gallery-wrapper">
      <div className="inner-gallery-wrapper">
        <div className="gallery-card-holder">
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.title} />;
          })}
        </div>
      </div>
    </div>
  );
}
