import AddNewCardForm from "./components/AddNewCardForm";
import CardContainer from "./components/CardContainer";
import CardHeader from "./components/CardHeader";
import DeleteCardModal from "./components/DeleteCardModal";
import EditCardModal from "./components/EditCardModal";
import EmptyCard from "./components/EmptyCard";
import Header from "./components/Header";
import NoCard from "./components/NoCard";
import StudyStatistics from "./components/StudyStatistics";
import useFlashCard from "./states/FlashCardState";

function App() {
  const isStudyMode = useFlashCard((state) => state.isStudyMode);
  const questionData = useFlashCard((state) => state.questionData);
  const isEditModalOpen = useFlashCard(state => state.isEditModalOpen);
  const isDeleteModalOpen = useFlashCard(state => state.isDeleteModalOpen);

  return (
    <main className="bg-neutral100 min-h-screen font-poppins px-4 pt-4 pb-10 flex flex-col md:px-8 md:pt-5 md:pb-16 gap-6 lg:gap-8 lg:py-6 lg:px-25 relative">
      {isEditModalOpen && <EditCardModal/>}
      {isDeleteModalOpen && <DeleteCardModal/>}
      <Header />

      {isStudyMode ? (
        <div className="flex flex-col gap-4 lg:flex-row">
          <section className="flex flex-col gap-3 rounded-2xl border-t border-l border-b-[3px] border-r-[3px] border-neutral900 bg-neutral0 overflow-hidden lg:w-2/3">
            <CardHeader />
            <EmptyCard />
          </section>
          <StudyStatistics />
        </div>
      ) : (
        <section className="flex flex-col gap-8">
          
          <AddNewCardForm />
          {questionData.length === 0 ? <NoCard /> : <CardContainer />}
        </section>
      )}
    </main>
  );
}

export default App;
