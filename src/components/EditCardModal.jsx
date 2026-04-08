import { useState } from "react";
import useFlashCard from "../states/FlashCardState";
import { MdError } from "react-icons/md";

function EditCardModal() {
    const closeEditModal = useFlashCard(state => state.closeEditModal)
    const questionData = useFlashCard(state => state.questionData)
    const activeCard = useFlashCard(state => state.activeCard)
    const  updateFlashCard = useFlashCard(state => state. updateFlashCard)

    const cardData = questionData.filter(card => card.id === activeCard)
    const [formData, setFormData] = useState({
        question : cardData[0].question,
        answer : cardData[0].answer,
        category : cardData[0].category
    })
    const [formErrors, setFormErrors]= useState({
        question : '',
        answer : '',
        category : ''
    })

    function handleFormDataChange(name, value){
        setFormData(prev => ({...prev, [name]: value.trim() ? value[0].toUpperCase() + value.slice(1) : ''}));
    }

    console.log(formData)

    function handleSubmit(e){
        e.preventDefault();
        const errors = {};

        if(!formData.question.trim()){
            errors.question = 'Please enter a question'
        }
        if(!formData.answer.trim()){
            errors.answer = 'Please enter an answer'
        }
        if(!formData.category.trim()){
            errors.category = 'Please enter a category'
        }

        setFormErrors(errors)
        if(Object.keys(errors).length > 0){
            return
        }
        
        updateFlashCard(activeCard, formData)
        
        setFormErrors({question : '',
        answer : '',
        category : ''})

        setFormData({question : '',
        answer : '',
        category : ''})


    }
    
  return (
    <div className="bg-neutral900/70 fixed top-0 left-0 w-full h-screen z-30 items-center justify-center flex">
        <div className="bg-neutral0 rounded-2xl border border-neutral900 border-r-4 border-b-4 p-8 flex flex-col gap-4 font-inter max-w-150 w-full relative">
            <button type="button" onClick={closeEditModal} className="absolute top-4 right-3 cursor-pointer"><img src="./icon-cross.svg" alt="" className="w-4 h-4"/></button>
            <h2 className="text-preset2 text-neutral900">Edit your card</h2>
            <form action="" id='editForm' onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                            value={formData.question}
                            onChange={(e) => handleFormDataChange("question", e.target.value)}
                            className={`p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none ${formErrors.question ? "border-pink700 border-r-2 border-b-2" : ""}`}
                            placeholder="e.g., What is the capital of France?"
                          />
                          {formErrors.question && (
                                      <span className="flex items-center gap-1 text-preset5 text-pink700">
                                        <MdError className="w-3.5 h-3.5 text-pink700" /> {formErrors.question}.
                                      </span>
                                    )}
                          
                        </div>
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="answer"
                            className="text-preset4 font-medium text-neutral900"
                          >
                            Answer
                          </label>
                          <div
                            className={`p-4 border border-neutral900 bg-neutral0 rounded-md h-25  ${formErrors.answer ? "border-pink700 border-r-2 border-b-2" : ""}`}
                          >
                            <input
                              type="text"
                              name="answer"
                              id="answer"
                              value={formData.answer}
                              onChange={(e) => handleFormDataChange("answer", e.target.value)}
                              className="outline-none text-preset4 text-neutral600 w-full"
                              placeholder="e.g., Paris"
                            />
                          </div>
                          {formErrors.answer && (
                                      <span className="flex items-center gap-1 text-preset5 text-pink700">
                                        <MdError className="w-3.5 h-3.5 text-pink700" /> {formErrors.answer}.
                                      </span>
                                    )}
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
                            value={formData.category}
                            onChange={(e) => handleFormDataChange("category", e.target.value)}
                            className={`p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none ${formErrors.category ? "border-pink700 border-r-2 border-b-2" : ""}`}
                            placeholder="e.g., Geography"
                          />
                          {formErrors.category && (
                                      <span className="flex items-center gap-1 text-preset5 text-pink700">
                                        <MdError className="w-3.5 h-3.5 text-pink700" /> {formErrors.category}.
                                      </span>
                                    )}
                        </div>
            </form>
            <button
        type="submit" form="editForm"
        className="disabled:opacity-50 disabled:cursor-not-allowed shadow-emptyBtn bg-yellow500 text-neutral900 px-5 py-3 rounded-full border border-neutral900 text-preset4 font-semibold flex items-center gap-2 self-end"
       
      >
        Update Card
      </button>
        </div>
    </div>
  )
}

export default EditCardModal