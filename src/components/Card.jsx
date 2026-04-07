function Card({ question, answer, category, knownCount, id }) {
  return (
    <article className="bg-neutral0 border border-b-[3px] border-r-[3px] rounded-2xl border-neutral900 divide-y divide-neutral900 flex flex-col">
      <div className="text-preset3 text-neutral900 p-4">{question}</div>
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <h4 className="text-preset5 text-neutral900/60">Answer</h4>
        <p className="text-preset5 text-neutral900">{answer}</p>
      </div>
      <div className="flex items-center px-4 justify-between mt-auto gap-2">
        <div
          className="bg-neutral0 rounded-full px-3 py-1.5 border border-neutral900 shadow-category
         text-preset6 text-neutral900 my-2.5"
        >
          {category}
        </div>
        <div className="w-px h-full bg-neutral900"></div>
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
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-teal400 shadow-mastered border border-neutral900 text-neutral900 text-preset6 my-2.5">
            <img src="./icon-mastered.svg" alt="" className="w-4 h-4" />{" "}
            Mastered 5/5
          </div>
        )}
        <div className="w-px h-full bg-neutral900"></div>
        <button className="w-6 h-6 flex items-center justify-center my-2.5">
          {" "}
          <img src="/icon-menu.svg" alt="" />
        </button>
      </div>
    </article>
  );
}

export default Card;
