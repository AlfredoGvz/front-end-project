function Modal() {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-pink-100">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <label className="font-bold text-lg py-4">
            Tell us your thoughts!
          </label>
          <textarea
            // value={comment}
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
                // postComment(
                //   userName,
                //   comment,
                //   article_id,
                //   setCurrentComment,
                //   setComment
                // );
              }}
            >
              <label htmlFor="my_modal_6">Post Comment!</label>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
