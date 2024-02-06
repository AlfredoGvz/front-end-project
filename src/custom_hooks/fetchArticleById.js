import axios from "axios";
import { useState, useEffect } from "react";

export default function fetchArticleById(url) {
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
        // handle error
        setErrorFetchArticleById(error);
      });
  }, []);
  return { data, isPending, errorFetchArticleById };
}
