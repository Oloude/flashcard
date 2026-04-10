import QuestionCard from "./QuestionCard"
import useFlashCard from "../states/FlashCardState"
import AnswerCard from "./AnswerCard"
import { useState } from "react"


function FlashCardContainer() {
    const toggleShowAnswer = useFlashCard(state => state.toggleShowAnswer)
    const isShowAnswer = useFlashCard(state => state.isShowAnswer)
    const questionData  = useFlashCard(state => state.questionData)
    const incrementKnownCount = useFlashCard(state => state.incrementKnownCount)
    const resetKnownCount = useFlashCard(state => state.resetKnownCount)
    const [activeNumber, setActiveNumber] = useState(0)

    const activeFlashCard = questionData[activeNumber]
    const knownCount = activeFlashCard.knownCount

    function handlePrev(){
      setActiveNumber(prev => prev === 0 ? 0 : prev - 1)
    }

    function handleNext(){
      setActiveNumber(prev => prev === questionData.length -1 ? prev : prev + 1)
    }


  return (
    <section className="w-full flex flex-col">
        <div className="p-5 border-b border-neutral900 flex flex-col gap-5">
            <div onClickCapture={toggleShowAnswer} className="w-full h-90 border-2 border-neutral900 rounded-2xl shadow-emptyBtn overflow-hidden relative">
                
{
    isShowAnswer? <AnswerCard answer={activeFlashCard.answer}/> : <QuestionCard question={activeFlashCard.question}/>
}
                <div className="bg-neutral0 border border-neutral900 rounded-full px-3 py-1.5 text-neutral900 text-preset6 shadow-category z-20 absolute top-4 left-1/2 -translate-x-1/2">{activeFlashCard.category}</div>
                <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2">
                {knownCount < 5 ? (
          <div className="flex items-center gap-1.5 flex-1 my-2.5">
            <div className="relative border border-neutral900 rounded-full w-15 h-2 bg-neutral0">
              <span
                style={{ width: `${(knownCount / 5) * 100}%` }}
                className={`bg-neutral900 h-full rounded-full absolute top-0 left-0 block`}
              ></span>
            </div>
            <p className="text-preset6 text-neutral900">{knownCount}/5</p>
          </div>
        ) : (
          <div className="flex-1 flex">
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full  bg-teal400 shadow-mastered border border-neutral900 text-neutral900 text-preset6 my-2.5">
            <img src="./icon-mastered.svg" alt="" className="w-4 h-4" />{" "}
            Mastered 5/5
          </div>
          </div>
        )}</div>

            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-center gap-5">
                {
                    knownCount < 5 ? <button onClick={()=>incrementKnownCount(activeFlashCard.id)} className="flex items-center gap-2 px-5 py-3 bg-yellow500 border border-neutral900 rounded-full text-preset4 font-medium text-neutral900 shadow-emptyBtn w-full justify-center md:w-auto"><img src="/icon-circle-check.svg" alt="" />I Know This</button> : 
                    <button className="flex items-center gap-2 px-5 py-3 bg-yellow500 border border-neutral900 rounded-full text-preset4 font-medium text-neutral900 shadow-emptyBtn opacity-50 cursor-not-allowed w-full justify-center md:w-auto" disabled ><img src="/icon-circle-check.svg" alt="" />Already Mastered</button>
                }
                <button onClick={()=> resetKnownCount(activeFlashCard.id)} className="flex items-center gap-2 px-5 py-3 bg-neutral0 border border-neutral900 rounded-full shadow-emptyBtn text-preset4 text-neutral900 font-medium w-full justify-center md:w-auto"><img src="/icon-reset.svg" alt="" /> Reset Progress</button>
            </div>
        </div>

        <div className="flex items-center justify-between p-5">
            <button disabled={activeNumber === 0} onClick={handlePrev} className="text-neutral900 px-3 md:px-4 py-3 bg-neutral0 border border-neutral900 rounded-full flex items-center gap-2 text-preset4 font-medium"><img src="/icon-chevron-left.svg" alt="" /><span className="hidden md:inline">Previous</span></button>
            <div className="text-preset5 text-neutral600">Card {activeNumber + 1} of {questionData.length}</div>
            <button disabled={activeNumber === questionData.length - 1} onClick={handleNext} className="text-neutral900 px-3 md:px-4 py-3 bg-neutral0 border border-neutral900 rounded-full flex items-center gap-2 text-preset4 font-medium"><span className="hidden md:inline">Next</span><img src="/icon-chevron-right.svg" alt="" /></button>
        </div>

    </section>
  )
}

export default FlashCardContainer