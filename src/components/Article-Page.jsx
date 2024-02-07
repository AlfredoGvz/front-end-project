import { useParams, Link } from "react-router-dom";
import fetchArticleById from "../custom_hooks/fetchArticleById";
import fetchComments from "../custom_hooks/fetchComments";
import ArticlePageContent from "./Article-Page-Content";

export default function ArticlePage() {
  const { article_id } = useParams();

  const {
    data: article,
    isPending,
    errorFetchArticleById,
  } = fetchArticleById(
    `https://north-star-articles.onrender.com/api/articles/${article_id}`
  );
  const { data: comments, errorFetchComments } = fetchComments(
    `https://north-star-articles.onrender.com/api/articles/${article_id}/comments`
  );
  return (
    <ArticlePageContent
      comments={comments}
      article={article}
      article_id={article_id}
      isPending={isPending}
    />
  );
}
