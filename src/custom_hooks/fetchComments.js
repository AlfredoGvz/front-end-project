import axios from "axios";
import { useState, useEffect } from "react";

export default function fetchComments(url) {
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
        // handle error
        setErrorFetchComments(error);
      });
  }, [url]);
  return { data, isPending, errorFetchComments };
}
