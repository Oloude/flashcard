

function QuestionCard({question}) {
  return (
    <div className="w-full h-full bg bg-pink400 relative flex flex-col gap-6 justify-center items-center">
        <img src="/pattern-star-blue.svg" alt="" className="absolute top-7 right-8"/>
        <img src="/pattern-star-yellow.svg" alt="" className="absolute bottom-7 left-8"/>
        <h1 className="text-preset1M md:text-preset1T lg:text-preset1 text-neutral900 text-center">{question}</h1>
        <button className="text-preset4 font-medium text-neutral900">Click to reveal answer</button>    
    </div>
  )
}

export default QuestionCard