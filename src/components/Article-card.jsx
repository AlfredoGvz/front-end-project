import { NavLink } from "react-router-dom";
export default function ArticleCard({ article }) {
  return (
    <div className="card-wrapper">
      <div className="inner-card">
        <img src={article.article_img_url} alt="" />
        <div>
          <div>
            <p>{article.title}</p>
            <p>By: {article.author}</p>
            <p>Date: {article.created_at}</p>
          </div>
          <NavLink to={`/api/articles/${article.article_id}`}>
            Take me there
          </NavLink>
        </div>
      </div>
    </div>
  );
}

//
