import { useState } from "react";
import { MdError } from "react-icons/md";
import useFlashCard from "../states/FlashCardState";

function AddNewCardForm() {
  const addNewFlashCard = useFlashCard((state) => state.addNewFlashCard);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
  });

  const [formErrors, setFormErrors] = useState({
    question: "",
    answer: "",
    category: "",
  });

  function handleFormDataChange(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value[0].toUpperCase() + value.slice(1) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = {};
    if (!formData.question.trim()) {
      errors.question = "Please enter a question.";
    }
    if (!formData.answer.trim()) {
      errors.answer = "Please enter an answer.";
    }
    if (!formData.category.trim()) {
      errors.category = "Please enter a category.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0){
      return;
    }
     setIsSubmitting(true);
    const newFlashCard = {
      id: Date.now(),
      ...formData,
      knownCount : 0,
    }
   

    addNewFlashCard(newFlashCard);
    setFormData({
      question: "",
      answer: "",
      category: "",
    })
      setIsSubmitting(false);
    
  }
  return (
    <form
      action=""
      onSubmit={handleSubmit}
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
            name="question"
            id="question"
            className={`p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none ${formErrors.question ? "border-pink700 border-r-2 border-b-2" : ""}`}
            placeholder="e.g., What is the capital of France?"
            value={formData.question}
            onChange={(e) => handleFormDataChange("question", e.target.value)}
          />
          {formErrors.question && (
            <span className="flex items-center gap-1 text-preset5 text-pink700">
              <MdError className="w-3.5 h-3.5 text-pink700" /> Please enter a
              question.
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
              className="outline-none text-preset4 text-neutral600"
              placeholder="e.g., Paris"
              value={formData.answer}
              onChange={(e) => handleFormDataChange("answer", e.target.value)}
            />
          </div>
          {formErrors.answer && (
            <span className="flex items-center gap-1 text-preset5 text-pink700">
              <MdError className="w-3.5 h-3.5 text-pink700" /> Please enter an
              answer.
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
            className={`p-4 border border-neutral900 bg-neutral0 rounded-md text-preset4 text-neutral600 outline-none ${formErrors.category ? "border-pink700 border-r-2 border-b-2" : ""}`}
            placeholder="e.g., Geography"
            value={formData.category}
            onChange={(e) => handleFormDataChange("category", e.target.value)}
          />
          {formErrors.category && (
            <span className="flex items-center gap-1 text-preset5 text-pink700">
              <MdError className="w-3.5 h-3.5 text-pink700" /> Please enter a
              category.
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="disabled:opacity-50 disabled:cursor-not-allowed shadow-emptyBtn bg-yellow500 text-neutral900 px-5 py-3 rounded-full border border-neutral900 text-preset4 font-semibold flex items-center gap-2 self-start"
        disabled={isSubmitting}
      >
        <img src="/icon-circle-plus.svg" alt="" className="w-4 h-4" />
        Create Card
      </button>
    </form>
  );
}

export default AddNewCardForm;
