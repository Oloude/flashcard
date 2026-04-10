import CardHeader from "./CardHeader";
import useFlashCard from "../states/FlashCardState";
import Card from "./Card";
import { useState } from "react";

function CardContainer() {
  const questionData = useFlashCard((state) => state.questionData);
  const category = useFlashCard(state => state.category)
    const hideMastered = useFlashCard(state => state.hideMastered)
  const [visibleCards, setVisibleCards] = useState(12);

  const flashCards = questionData
  .filter(card => !hideMastered || card.knownCount < 5)
  .filter(card => category.length === 0 || category.includes(card.category));

  function loadMoreCards() {
    setVisibleCards((prev) => prev + 10);
  }
  return (
    <section className="flex flex-col gap-8">
      <CardHeader plain />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashCards.slice(0, visibleCards).map((question) => (
          <Card key={question.id} {...question} />
        ))}
      </div>
      <button
        className="disabled:opacity-50 disabled:cursor-not-allowed rounded-full border border-neutral900 text-preset4 font-medium text-neutral900 px-5 py-3 shadow-emptyBtn hover:shadow-hover transition-all hover:cursor-pointer self-center"
        onClick={loadMoreCards}
        disabled={visibleCards >= flashCards.length}
      >
        Load More
      </button>
    </section>
  );
}

export default CardContainer;
