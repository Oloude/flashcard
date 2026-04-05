function AddNewCardForm() {
  return (
    <form
      action=""
      className="flex flex-col gap-6 rounded-2xl border border-b-4 border-r-4 border-neutral900 bg-neutral0 p-4 md:p-8"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="question"
            className="text-preset4 font-medium text-neutral900"
          >
            Question
          </label>
          <input
            type="text"
            name=""
            id="question"
            className="p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none"
            placeholder="e.g., What is the capital of France?"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="answer"
            className="text-preset4 font-medium text-neutral900"
          >
            Answer
          </label>
          <div className="p-4 border border-neutral900 bg-neutral0 rounded-md  h-25 ">
            <input
              type="text"
              name=""
              id="answer"
              className="outline-none text-preset4 text-neutral600"
              placeholder="e.g., Paris"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="category"
            className="text-preset4 font-medium text-neutral900"
          >
            Category
          </label>
          <input
            type="text"
            name=""
            id="category"
            className="p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none"
            placeholder="e.g., Geography"
          />
        </div>
      </div>
      <button className=" shadow-emptyBtn bg-yellow500 text-neutral900 px-5 py-3 rounded-full border border-neutral900 text-preset4 font-semibold flex items-center gap-2 self-start">
        <img src="/icon-circle-plus.svg" alt="" className="w-4 h-4" />
        Create Card
      </button>
    </form>
  );
}

export default AddNewCardForm;
