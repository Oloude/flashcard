import useFlashCard from "../states/FlashCardState";

function CategoryDropdown() {
  const isOpen = useFlashCard((state) => state.isOpenCategoryDropdown);
  
 
  return (
    <div className="absolute top-full left-2 mt-2 w-60 flex-col border border-neutral900 rounded-lg bg-neutral0 z-50 flex shadow-dropdown divide-y divide-neutral900 font-medium">
      {[1, 2, 34, 4, 4].map((n, i) => (
        <label
          htmlFor=""
          className="text-neutral900 px-4 py-2 w-full flex items-center gap-2 text-preset5"
        >
          <input type="checkbox" name="" />
          Javascript <span className="text-neutral600">(14)</span>
        </label>
      ))}
    </div>
  );
}

export default CategoryDropdown;
