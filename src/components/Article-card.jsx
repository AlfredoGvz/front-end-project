export default function ArticleCard({ article }) {
  return (
    <div className="w-2/3  shadow-xl me-auto ms-auto bg-zinc-100">
      <figure className=" ">
        <img
          src={article.article_img_url}
          alt="Shoes"
          className="me-auto ms-auto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <div className="badge ">{article.topic}</div>
        <p>by: {article.author}</p>
        <div className="card-actions justify-end">
          <button
            className=""
            onClick={(e) => {
              console.dir(e.target);
            }}
          >
            Read More!
          </button>
        </div>
      </div>
    </div>
  );
}
//
