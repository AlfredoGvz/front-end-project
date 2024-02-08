import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchComments(article_id) {
  const url = `https://north-star-articles.onrender.com/api/articles/${article_id}/comments`;
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [errorFetchComments, setErrorFetchComments] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => {
        setErrorFetchComments(error);
      });
  }, [url]);
  return { data, isPending, errorFetchComments };
}
