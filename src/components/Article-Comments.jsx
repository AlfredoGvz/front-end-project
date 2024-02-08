import { Link } from "react-router-dom";
import PostComment from "./Post-Comment";
import { useState } from "react";

export default function ArticleComments({ comments, article_id }) {
  const [currentComment, setCurrentComment] = useState([]);

  const miltipleComments = currentComment.concat(comments.comments);
  console.log(miltipleComments);
  if (comments.length === 0) {
    return (
      <div>
        <div className="flex place-items-baseline justify-between pb-9">
          <h2 className="text-xl">No Comments Available</h2>
          <PostComment article_id={article_id} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex place-items-baseline justify-between ">
          <h2 className="text-xl">Comments</h2>
          <PostComment
            article_id={article_id}
            setCurrentComment={setCurrentComment}
          />
        </div>

        <div className="divide-y pb-9">
          {miltipleComments.map((comment) => {
            return (
              <div className="mt-3" key={comment.comment_id}>
                <div className="mt-8">
                  <p>
                    {comment.body} -{" "}
                    <Link className="text-blue-700" to="/articles">
                      {comment.author}
                    </Link>
                  </p>
                  <p className="mt-1.5 text-slate-400">
                    {comment.created_at.slice(
                      0,
                      comment.created_at.indexOf("T")
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
