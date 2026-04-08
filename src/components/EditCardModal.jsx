import useFlashCard from "../states/FlashCardState"

function EditCardModal() {
    const closeEditModal = useFlashCard(state => state.closeEditModal)
    
  return (
    <div className="bg-neutral900/70 fixed top-0 left-0 w-full h-screen z-30 items-center justify-center flex">
        <div className="bg-neutral0 rounded-2xl border border-neutral900 border-r-4 border-b-4 p-8 flex flex-col gap-4 font-inter max-w-150 w-full relative">
            <button onClick={closeEditModal} className="absolute top-4 right-3 cursor-pointer"><img src="./icon-cross.svg" alt="" className="w-4 h-4"/></button>
            <h2 className="text-preset2 text-neutral900">Edit your card</h2>
            <form action="" className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                          <label
                            htmlFor="question"
                            className="text-preset4 font-medium text-neutral900"
                          >
                            Question
                          </label>
                          <input
                            type="text"
                            name="question"
                            id="question"
                            className={`p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none`}
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
                          <div
                            className={`p-4 border border-neutral900 bg-neutral0 rounded-md h-25`}
                          >
                            <input
                              type="text"
                              name="answer"
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
                            name="category"
                            id="category"
                            className={`p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none`}
                            placeholder="e.g., Geography"
                          />
                        </div>
            </form>
            <button
        type="submit"
        className="disabled:opacity-50 disabled:cursor-not-allowed shadow-emptyBtn bg-yellow500 text-neutral900 px-5 py-3 rounded-full border border-neutral900 text-preset4 font-semibold flex items-center gap-2 self-end"
       
      >
        Update Card
      </button>
        </div>
    </div>
  )
}

export default EditCardModal