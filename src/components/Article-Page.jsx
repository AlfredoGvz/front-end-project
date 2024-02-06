import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [articleToDisplay, setArticleToDisplay] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://north-star-articles.onrender.com/api/articles/" + article_id
      )
      .then(({ data }) => {
        setArticleToDisplay(data.article[0]);
      });
  }, []);
  return (
    <div className="outer-wrapper">
      <div className=" w-8/12 m-auto">
        <div className="article-header mb-8">
          <h1 className="text-4xl font-serif mb-5 mt-12 pt-12">
            {articleToDisplay.title}
          </h1>
          <p>Author: {articleToDisplay.author}</p>
        </div>
        <div className="text-sm breadcrumbs ">
          <ul>
            <li>
              <Link to="/api/articles">Articles</Link>
            </li>
            <li>
              <a>{articleToDisplay.topic}</a>
            </li>
          </ul>
        </div>

        <div className="img-banner mb-8 ">
          <img src={articleToDisplay.article_img_url} alt="" />
        </div>

        <div className="pb-12">{articleToDisplay.body}</div>
      </div>
    </div>
  );
}
