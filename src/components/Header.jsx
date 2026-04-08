import useFlashCard from "../states/FlashCardState";

function Header() {
  const isStudyMode = useFlashCard((state) => state.isStudyMode);
  const toggleStudyMode = useFlashCard((state) => state.toggleStudyMode);

  return (
    <header className="flex items-center gap-3 justify-between">
      <div>
        <img src="./logo-small.svg" alt="" className="w-10 h-10 md:hidden" />
        <img
          src="./logo-large.svg"
          alt=""
          className="hidden w-40 h-10 md:inline-block"
        />
      </div>
      <button
        onClick={toggleStudyMode}
        className="flex gap-1 items-center p-1 border border-neutral900 bg-neutral0 shadow-header rounded-full"
      >
        <span
          className={`px-3 py-2 text-preset4 font-semibold text-neutral900 rounded-full md:px-4 md:py-3 hover:cursor-pointer ${isStudyMode ? "bg-yellow500 border border-neutral900" : "hover:border hover:border-neutral900 transition-all"}`}
        >
          Study Mode
        </span>
        <span
          className={`px-3 py-2 text-preset4 font-semibold text-neutral900 rounded-full md:px-4 md:py-3 hover:cursor-pointer ${isStudyMode ? "hover:border hover:border-neutral900 transition-all" : "bg-yellow500 border border-neutral900"}`}
        >
          All Cards
        </span>
      </button>
    </header>
  );
}

export default Header;
