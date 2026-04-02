import StudyStats from "./StudyStats"

const stats= [
    {
        title : 'Total cards',
        stats : 0
    },
    {
        title : 'Mastered',
        stats : 0
    },
    {
        title : 'In Progress',
        stats : 0
    },
    {
        title : 'Not Started',
        stats : 0
    },
]

function StudyStatistics() {
  return (
    <section className="border-t border-r-[3px] border-b-[3px] border-l border-neutral900 rounded-2xl px-4 py-5 flex flex-col gap-4 bg-neutral0">
        <h2 className="text-preset2 text-neutral900">Study Statistics</h2>
        <div className="flex flex-col gap-4">
            {stats.map(stat => <StudyStats key={stat.title} {...stat}/>)}

        </div>

    </section>
  )
}

export default StudyStatistics