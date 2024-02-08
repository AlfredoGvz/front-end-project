import { Link } from "react-router-dom";
import ArticleComments from "./Article-Comments";
import { useState } from "react";
import { updateVotes, setVoteInit } from "../custom_hooks/updateVotes";
export default function ArticlePageContent({
  comments,
  article,
  article_id,
  isPending,
}) {
  let [active, setActive] = useState(true);

  let [vote, setVote] = useState(1);
  let [articleVotes, setArticleVotes] = useState(0);
  setVoteInit(article, setArticleVotes);

  if (isPending) {
    return (
      <div>
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Loading
        </button>
      </div>
    );
  } else {
    return (
      <div className="outer-wrapper">
        <div className=" w-8/12 m-auto">
          <div className="article-header mb-8">
            <h1 className="text-4xl font-serif mb-5 mt-12 pt-12">
              {article.title}
            </h1>
            <p>by: {article.author}</p>
          </div>
          <div className="text-sm breadcrumbs flex justify-between">
            <ul>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link>{article.topic}</Link>
              </li>
            </ul>

            <div className="flex justify-around"></div>
            <button
              className="btn"
              onClick={(e) => {
                updateVotes(
                  e,
                  active,
                  setActive,
                  setArticleVotes,
                  setVote,
                  vote,
                  article_id
                );
              }}
            >
              Like
              <div className="badge badge-secondary">{articleVotes}</div>
            </button>
          </div>
          <div className="img-banner mb-8 ">
            <img src={article.article_img_url} alt="" />
          </div>
          <div className="pb-12">{article.body}</div>
          <div className="divider divider-neutral"></div>
          <ArticleComments comments={comments} article_id={article_id} />
        </div>
      </div>
    );
  }
}
