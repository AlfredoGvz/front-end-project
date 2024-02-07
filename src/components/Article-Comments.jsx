import { Link } from "react-router-dom";
export default function ArticleComments({ comments }) {
  if (comments.length === 0) {
    return <h2 className="text-xl pb-9">No Comments Available</h2>;
  } else {
    return (
      <div>
        <h2 className="text-xl">Comments</h2>
        <div className="divide-y pb-9">
          {comments.comments.map((comment) => {
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
