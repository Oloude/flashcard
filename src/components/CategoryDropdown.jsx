import useFlashCard from "../states/FlashCardState";

function CategoryDropdown() {
  const isOpen = useFlashCard((state) => state.isOpenCategoryDropdown);
  const questionData = useFlashCard((state) => state.questionData);

  const categoryCounts =questionData.reduce((count, card)=> {
    count[card.category] = (count[card.category ] || 0) + 1;
    return count

  }, {});

  const categoryCountsArray = Object.entries(categoryCounts).map(([category, count]) => ({ category, count }));


 
  return (
    <div className="absolute top-full left-2 mt-2 w-60 flex-col border border-neutral900 rounded-lg bg-neutral0 z-50 flex shadow-dropdown divide-y divide-neutral900 font-medium">
      {categoryCountsArray.map((category, i) => (
        <label key={i}
          htmlFor=""
          className="text-neutral900 px-4 py-2 w-full flex items-center gap-2 text-preset5"
        >
          <input type="checkbox" name="" />
          {category.category} <span className="text-neutral600">({category.count})</span>
        </label>
      ))}
    </div>
  );
}

export default CategoryDropdown;
