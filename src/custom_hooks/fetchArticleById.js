import axios from "axios";
import { useState, useEffect } from "react";

export default function fetchArticleById(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      console.log(url);
      setTimeout(() => {
        setIsPending(false);
        setData(data.article[0]);
      }, 1000);
    });
  }, []);
  return { data, isPending };
}
