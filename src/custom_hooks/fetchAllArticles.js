import { useEffect, useState } from "react";
import axios from "axios";
export default function fetchAllArticles(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [errorFetchAllArticles, setErrorFetchAllArticles] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setIsPending(false);
        setData(data.articles);
      })
      .catch((error) => {
        // handle error
        setErrorFetchAllArticles(error);
      });
  }, [url]);
  return { data, isPending, errorFetchAllArticles };
}
