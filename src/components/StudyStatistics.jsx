import StudyStats from "./StudyStats";
import useFlashCard from "../states/FlashCardState";

function StudyStatistics() {
  const questionData = useFlashCard((state) => state.questionData);

  const mastered = questionData.filter(
    (question) => question.knownCount >= 5,
  ).length;
  const inProgress = questionData.filter(
    (question) => question.knownCount > 0 && question.knownCount < 5,
  ).length;
  const notStarted = questionData.filter(
    (question) => question.knownCount === 0,
  ).length;

  const stats = [
    {
      title: "Total cards",
      stats: questionData.length,
    },
    {
      title: "Mastered",
      stats: mastered,
    },
    {
      title: "In Progress",
      stats: inProgress,
    },
    {
      title: "Not Started",
      stats: notStarted,
    },
  ];

  return (
    <section className="border-t border-r-[3px] border-b-[3px] border-l border-neutral900 rounded-2xl px-4 py-5 flex flex-col gap-4 bg-neutral0 lg:w-1/3">
      <h2 className="text-preset2 text-neutral900">Study Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {stats.map((stat) => (
          <StudyStats key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  );
}

export default StudyStatistics;
