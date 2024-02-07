import { NavLink, Link } from "react-router-dom";
import ArticleComments from "./Article-Comments";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticlePageContent({ comments, article, article_id }) {
  let [active, setActive] = useState(true);
  let [vote, setVote] = useState(-1);
  function check() {
    if (active) {
      setVote(1);
    } else {
      setVote(-1);
    }
  }
  useEffect();
  return (
    <div className="outer-wrapper">
      <div className=" w-8/12 m-auto">
        <div className="article-header mb-8">
          <h1 className="text-4xl font-serif mb-5 mt-12 pt-12">
            {article.title}
          </h1>
          <p>by: {article.author}</p>
        </div>
        <div className="text-sm breadcrumbs flex justify-between ">
          <ul>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link>{article.topic}</Link>
            </li>
          </ul>
          <div className="flex">
            <p className="text-sm">{article.votes}</p>
            <button
              className="badge badge-ghost"
              onClick={(e) => {
                setActive(!active);
                check();
                axios
                  .patch(
                    `https://north-star-articles.onrender.com/api/articles/${article_id}`,
                    { inc_votes: vote }
                  )
                  .then((response) => console.log(response.data))
                  .catch((error) => console.error(error));
              }}
            >
              Like
            </button>
            {/* <button className="badge badge-ghost">Dislike</button> */}
          </div>
        </div>

        <div className="img-banner mb-8 ">
          <img src={article.article_img_url} alt="" />
        </div>
        <div className="pb-12">{article.body}</div>
        <div className="divider divider-neutral"></div>
        <ArticleComments comments={comments} />
      </div>
    </div>
  );
}
