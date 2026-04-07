import CardHeader from "./CardHeader";
import useFlashCard from "../states/FlashCardState";
import Card from "./Card";

function CardContainer() {
  const questionData = useFlashCard((state) => state.questionData);
  return (
    <section className="flex flex-col gap-8">
      <CardHeader plain />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {questionData.map((question) => (
          <Card key={question.id} {...question} />
        ))}
      </div>
    </section>
  );
}

export default CardContainer;
