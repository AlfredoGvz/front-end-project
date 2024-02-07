import { Link } from "react-router-dom";
import ArticleCard from "./Article-card";
import fetchAllArticles from "../custom_hooks/fetchAllArticles";

export default function ArticleGallery() {
  const { data: articles, isPending } = fetchAllArticles();
  return (
    <div className="outer-gallery-wrapper">
      <div className="gallery-wrapper">
        {isPending && (
          <div>
            Loading
            <span className="loading loading-spinner text-neutral"></span>
          </div>
        )}
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
