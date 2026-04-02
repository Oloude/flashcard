

function CardHeader() {
  return (
    <header className="flex justify-between gap-2.5 items-start px-4 py-3 border-b border-neutral900">
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 text-preset4 font-medium text-neutral900 py-3 border border-neutral900 rounded-full">
                All Categories
                <button><img src="./icon-chevron-down.svg" alt="" /></button>
            </div>
            <label htmlFor="" className="flex items-center gap-2 text-neutral900 font-medium text-preset4">
                <input type="checkbox" name="" id="" className="w-4 h-4 appearance-none accent-yellow500 border rounded-sm border-neutral900 hover:border-b-2 hover:border-r-2"/>
                Hide Mastered
            </label>

        </div>
        <button className="flex items-center gap-3 px-4 py-3 text-preset4 font-medium text-neutral900 border border-neutral900 rounded-full"> <img src="./icon-shuffle.svg" alt="" /> Shuffle</button>
    </header>
  )
}

export default CardHeader