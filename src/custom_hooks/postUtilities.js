import axios from "axios";

function postComment(userName, comment, article_id, setCurrentComment) {
  const requestBody = {
    username: userName,
    body: comment,
  };
  axios
    .post(
      `https://north-star-articles.onrender.com/api/articles/${article_id}/comments`,
      requestBody
    )
    .then((response) => setCurrentComment(response.data.comment));
}

export default postComment;
