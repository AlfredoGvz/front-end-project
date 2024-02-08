import { useState } from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
import postComment from "../custom_hooks/postUtilities";

export default function PostComment({ article_id, setCurrentComment }) {
  const userName = useContext(UserContext);
  const [comment, setComment] = useState("");

  return (
    <div className="comment-modal">
      <button className="bg-gray-400 transition-all active:bg-gray-300 active:scale-95 p-2 mt-4 p-4">
        <label htmlFor="my_modal_6">Comment articles</label>
      </button>

      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle bg-sky-400"
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-stone-50 flex flex-col">
          <label className="font-bold text-lg py-4">
            Tell us your thoughts!
          </label>
          <textarea
            type="text"
            placeholder="Type here"
            className=" border-zinc-700 w-full bg-zinc-50 p-2 m-auto w-full"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <div className="flex justify-end">
            <button
              className="btn-wide bg-gray-400 transition-all active:bg-gray-300 active:scale-95 p-2 mt-4 p-4"
              onClick={(e) => {
                postComment(userName, comment, article_id, setCurrentComment);
              }}
            >
              <label htmlFor="my_modal_6">Post Comment!</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
