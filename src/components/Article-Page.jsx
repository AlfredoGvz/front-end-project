import { useParams, Link } from "react-router-dom";
import fetchArticleById from "../custom_hooks/fetchArticleById";
import fetchComments from "../custom_hooks/fetchComments";

export default function ArticlePage() {
  const { article_id } = useParams();

  const { data: article, isPending } = fetchArticleById(
    `https://north-star-articles.onrender.com/api/articles/${article_id}`
  );
  const { data: comments } = fetchComments(
    `https://north-star-articles.onrender.com/api/articles/${article_id}/comments`
  );
  console.log(article);
  return (
    <div>
      {isPending ? (
        <div>
          loading <span className="loading loading-spinner text-neutral"></span>
        </div>
      ) : (
        <div className="outer-wrapper">
          <div className=" w-8/12 m-auto">
            <div className="article-header mb-8">
              <h1 className="text-4xl font-serif mb-5 mt-12 pt-12">
                {article.title}
              </h1>
              <p>by: {article.author}</p>
            </div>
            <div className="text-sm breadcrumbs ">
              <ul>
                <li>
                  <Link to="/api/articles">Articles</Link>
                </li>
                <li>
                  <a>{article.topic}</a>
                </li>
              </ul>
            </div>

            <div className="img-banner mb-8 ">
              <img src={article.article_img_url} alt="" />
            </div>

            <div className="pb-12">{article.body}</div>
          </div>
        </div>
      )}
    </div>
  );
}
