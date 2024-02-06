import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleCard from "./Article-card";

export default function ArticleGallery() {
  const [articles, setArticles] = useState([]);
  const [articleId, setArticleId] = useState("");
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    axios
      .get("https://north-star-articles.onrender.com/api/articles")
      .then(({ data }) => {
        setTimeout(() => {
          setIsPending(false);
          setArticles(data.articles);
        }, 100);
      });
  }, []);
  return (
    <div className="outer-gallery-wrapper">
      <div className="gallery-wrapper">
        {isPending && <div>Loading</div>}
        {articles.map((article) => {
          return (
            <NavLink
              to={`/api/articles/${article.article_id}`}
              key={article.article_id}
            >
              <ArticleCard article={article} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
