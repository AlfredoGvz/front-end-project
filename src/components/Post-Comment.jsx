import { useState } from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
import postComment from "../custom_hooks/postUtilities";

export default function PostComment({ article_id, setCurrentComment }) {
  const userName = useContext(UserContext);
  const [comment, setComment] = useState("");
  return (
    <div className="post-comment-form">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Leave a comment
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-neutral-100	 ">
          <form
            method="dialog"
            className="bg-neutral-100	 flex flex-col items-end gap-3"
          >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="w-full">
              <label
                className="font-bold text-lg bg-neutral-100"
                htmlFor="comment-area"
              >
                Tell us your thoughts!
              </label>
            </div>
            <textarea
              id="comment-area"
              value={comment}
              type="text"
              placeholder="Type here"
              className=" border-zinc-700 w-full bg-zinc-50 p-2 m-auto w-full"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            {!comment ? (
              <button
                disabled={true}
                className=" transition-all active:bg-gray-300 active:scale-95 glass mr-0 bg-gray-100 text-gray-400"
                onClick={(e) => {
                  postComment(
                    userName,
                    comment,
                    article_id,
                    setCurrentComment,
                    setComment
                  );
                }}
              >
                Post Comment!
              </button>
            ) : (
              <button
                className=" transition-all active:bg-gray-300 active:scale-95  mr-0 bg-blue-800	text-slate-100"
                onClick={(e) => {
                  postComment(
                    userName,
                    comment,
                    article_id,
                    setCurrentComment,
                    setComment
                  );
                }}
              >
                Post Comment!
              </button>
            )}
          </form>
        </div>
      </dialog>
    </div>
  );
}

// <div className="comment-modal">
//   <button className="bg-gray-400 transition-all active:bg-gray-300 active:scale-95 p-2 mt-4 p-4">
//     <label htmlFor="my_modal_6">Comment articles</label>
//   </button>

//   <input
//     type="checkbox"
//     id="my_modal_6"
//     className="modal-toggle bg-sky-400"
//   />
//   <div className="modal" role="dialog">
//     <div className="modal-box bg-stone-50 flex flex-col">
//       <label className="font-bold text-lg py-4">
//         Tell us your thoughts!
//       </label>
//       <textarea
//         value={comment}
//         type="text"
//         placeholder="Type here"
//         className=" border-zinc-700 w-full bg-zinc-50 p-2 m-auto w-full"
//         onChange={(e) => {
//           setComment(e.target.value);
//         }}
//       />
//       <div className="flex justify-end">
//         <button
//           className="btn-wide bg-gray-400 transition-all active:bg-gray-300 active:scale-95 p-2 mt-4 p-4"
//           onClick={(e) => {
//             postComment(
//               userName,
//               comment,
//               article_id,
//               setCurrentComment,
//               setComment
//             );
//           }}
//         >
//           <label htmlFor="my_modal_6">Post Comment!</label>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
