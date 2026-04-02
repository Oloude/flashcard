

function StudyStats({title, stats}) {
  return (
    <div className="flex bg-neutral0 rounded-xl border border-neutral900 h-30 overflow-hidden">
      <div className="flex flex-col gap-2 p-5 w-2/3 justify-between">
        <h4 className="text-preset4 font-medium text-neutral900">{title}</h4>
        <p className="text-preset1M text-neutral900">{stats}</p>
      </div>
      <div className={`border-l border-neutral900 flex items-center justify-center w-1/3 ${
        title === 'Total cards' ? 'bg-blue400':
        title === 'Mastered' ? 'bg-teal400': 
        title === 'In Progress' ? 'bg-pink500' :
        title === 'Not Started' ? 'bg-pink400' :
        ''
      }`}>
        <img src={
        title === 'Total cards' ? './icon-stats-total.svg':
        title === 'Mastered' ? './icon-stats-mastered.svg': 
        title === 'In Progress' ? './icon-stats-in-progress.svg' :
        title === 'Not Started' ? './icon-stats-not-started.svg' :
        ''
          } alt={title} className="w-6.5 h-6"/>

      </div>

    </div>
  )
}

export default StudyStats