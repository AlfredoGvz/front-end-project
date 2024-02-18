import { Link } from "react-router-dom";
import ArticleCard from "./Article-card";
import fetchAllArticles from "../custom_hooks/fetchAllArticles";

export default function ArticleGallery() {
  const { data: articles, isPending } = fetchAllArticles();
  console.log(isPending);
  return (
    <div className="outer-gallery-wrapper">
      <div className="gallery-wrapper">
        {isPending ? (
          <div className="flex justify-center content-center fixed top-0 left-0 bottom-0 right-0">
            <p className="m-auto">
              <span className="loading loading-spinner text-neutral loading-lg"></span>
            </p>
          </div>
        ) : (
          articles.map((article) => (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <ArticleCard article={article} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
