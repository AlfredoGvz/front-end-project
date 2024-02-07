import axios from "axios";
import { useEffect } from "react";
export function updateVotes(
  e,
  active,
  setActive,
  setArticleVotes,
  setVote,
  vote,
  article_id
) {
  if (active) {
    setVote(-1);
  } else {
    setVote(1);
  }

  e.preventDefault();
  setActive(!active);
  setArticleVotes((current) => current + vote);
  axios
    .patch(
      `https://north-star-articles.onrender.com/api/articles/${article_id}`,
      { inc_votes: vote }
    )
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}

export function setVoteInit(article, setArticleVotes) {
  useEffect(() => {
    setArticleVotes(article.votes);
  }, [article]);
}
