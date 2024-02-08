import axios from "axios";
import { useState, useEffect } from "react";

export default function fetchArticleById(article_id) {
  const url = `https://north-star-articles.onrender.com/api/articles/${article_id}`;
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [errorFetchArticleById, setErrorFetchArticleById] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setIsPending(false);
        setData(data.article[0]);
      })
      .catch((error) => {
        setErrorFetchArticleById(error);
      });
  }, []);
  return { data, isPending, errorFetchArticleById };
}
