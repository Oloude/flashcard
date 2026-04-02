import CardHeader from "./components/CardHeader"
import EmptyCard from "./components/EmptyCard"
import Header from "./components/Header"
import StudyStatistics from "./components/StudyStatistics"


function App() {
  return (
    <main className="bg-neutral100 min-h-screen font-poppins px-4 pt-4 pb-10 flex flex-col md:px-8 md:pt-5 md:pb-16 gap-6 lg:gap-8 lg:py-6 lg:px-25">
      <Header/>
      <div className="flex flex-col gap-4 lg:flex-row">
        <section className="flex flex-col gap-3 rounded-2xl border-t border-l border-b-[3px] border-r-[3px] border-neutral900 bg-neutral0 overflow-hidden lg:w-2/3">
          <CardHeader/>
          <EmptyCard/>

        </section>
        <StudyStatistics/>

      </div>
    </main>
  )
}

export default App