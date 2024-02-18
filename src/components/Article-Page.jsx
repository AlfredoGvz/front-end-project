import { useParams, Link } from "react-router-dom";
import fetchArticleById from "../custom_hooks/fetchArticleById";
import fetchComments from "../custom_hooks/fetchComments";
import ArticlePageContent from "./Article-Page-Content";

export default function ArticlePage() {
  const { article_id } = useParams();

  const { data: article, isPending } = fetchArticleById(article_id);

  const { data: comments, errorFetchComments } = fetchComments(article_id);
  return (
    <div className="gallery-wrapper">
      {isPending ? (
        <div className="flex justify-center content-center fixed top-0 left-0 bottom-0 right-0">
          <p className="m-auto">
            <span className="loading loading-spinner text-neutral loading-lg"></span>
          </p>
        </div>
      ) : (
        <ArticlePageContent
          comments={comments}
          article={article}
          article_id={article_id}
          isPending={isPending}
        />
      )}
    </div>
  );
}
