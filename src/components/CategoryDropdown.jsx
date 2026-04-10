import { useEffect, useState } from "react";
import useFlashCard from "../states/FlashCardState";

function CategoryDropdown() {
  const questionData = useFlashCard((state) => state.questionData);
  const category = useFlashCard(state => state.category)
  const [selectedCategories, setSelectedCategories] = useState(category)
  const handleCategory = useFlashCard(state => state.handleCategory)

  const categoryCounts =questionData.reduce((count, card)=> {
    count[card.category] = (count[card.category ] || 0) + 1;
    return count

  }, {});



  const categoryCountsArray = Object.entries(categoryCounts).map(([category, count]) => ({ category, count }));

  function handleAddeCheckedCategory(category) {
  setSelectedCategories((prev) =>
    prev.includes(category)
      ? prev.filter((item) => item !== category)
      : [...prev, category]
  );
}

  useEffect(() => {
  handleCategory(selectedCategories);
}, [selectedCategories]);

 
  return (
    <div className="absolute top-full left-2 mt-2 w-60 flex-col border border-neutral900 rounded-lg bg-neutral0 z-50 flex shadow-dropdown divide-y divide-neutral900 font-medium overflow-hidden">
      {categoryCountsArray.map((category, i) => (
        <label key={i}
          htmlFor=""
          className="text-neutral900 px-4 py-2 w-full flex items-center gap-2 text-preset5  hover:bg-neutral100"
        >
          <input type="checkbox" name="" checked={selectedCategories.includes(category.category)}
        onChange={() => handleAddeCheckedCategory(category.category)} />
          {category.category} <span className="text-neutral600">({category.count})</span>
        </label>
      ))}
    </div>
  );
}

export default CategoryDropdown;
