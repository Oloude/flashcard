function Card() {
  return (
    <article className="bg-neutral0 border border-b-[3px] border-r-[3px] rounded-2xl border-neutral900 divide-y divide-neutral900">
      <div className="text-preset3 text-neutral900 p-4"></div>
      <div className="flex flex-col gap-1.5 p-4 min-h-31.5">
        <h4 className="text-preset5 text-neutral900/60">Answer</h4>
        <p className="text-preset5 text-neutral900"></p>
      </div>
      <div className="flex items-center divide-x divide-neutral900 px-4">
        <div className="bg-neutral0 rounded-full px-3 py-1.5 border border-neutral900 shadow-category text-preset6 text-neutral900"></div>
        <div className="flex items-center gap-1.5">
          <div className="relative border border-neutral900 rounded-full w-15 h-2 bg-neutral0">
            <span className={`bg-neutral900 h-full rounded-full`}></span>
          </div>
          <p className="text-preset6 text-neutral900">0/5</p>
        </div>
        <button className="w-6 h-6 flex items-center justify-center">
          {" "}
          <img src="/icon-menu.svg" alt="" />
        </button>
      </div>
    </article>
  );
}

export default Card;
