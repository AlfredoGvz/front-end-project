import axios from "axios";
import { useState, useEffect } from "react";

export default function fetchComments(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get(url).then(
        ({ data }) => {
          setData(data);
          setIsPending(false);
        },
        [url]
      );
    }, 1000);
  }, []);
  return { data, isPending };
}
