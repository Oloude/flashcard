

function AnswerCard() {
  return (
    <div className="w-full h-full bg bg-blue400 relative flex flex-col gap-10 justify-center items-center">
        <img src="/pattern-star-pink.svg" alt="" className="absolute top-7 right-8"/>
        <img src="/pattern-star-yellow.svg" alt="" className="absolute bottom-7 left-8"/>
        <button className="text-preset4 font-medium text-neutral900">Answer:</button>  
        <h2 className="text-preset2 text-neutral900 text-center"></h2>
          
    </div>
  )
}

export default AnswerCard