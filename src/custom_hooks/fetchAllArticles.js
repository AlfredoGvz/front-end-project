import { useEffect, useState } from "react";
import axios from "axios";
export default function fetchAllArticles(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setIsPending(false);
        setData(data.articles);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { data, isPending };
}
