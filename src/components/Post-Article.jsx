export default function PostNewArticle() {
  return (
    <div className="w-9/12 m-auto">
      <form className="p-12 post-article-form">
        <div className="space-y-12 outer-gallery-wrapper m-auto">
          <div className="border-b border-gray-900/10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Your new post!
            </h2>

            <div className="mt-10  gap-x-6 gap-y-8">
              <div className="">
                <label
                  htmlFor="author"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="author"
                    id="author"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="body"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Article body
                </label>
                <div className="mt-1">
                  <textarea
                    id="body"
                    name="body"
                    rows="5"
                    cols="2"
                    className="block w-full rounded-md border-0 py-1.5 sshadow-sm 
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10  gap-x-6 gap-y-8 ">
              <div className="sm:col-span-4">
                <label
                  htmlFor="author"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="author"
                    id="author"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="article_img_url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Submit image URL
                </label>
                <div className="mt-1">
                  <input
                    id="article_img_url"
                    name="article_img_url"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Article topic
                </label>
                <div className="mt-1">
                  <select
                    id="topic"
                    name="topic"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
                  >
                    <option>Coding</option>
                    <option>Football</option>
                    <option>Cooking</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
