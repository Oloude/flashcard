

function Header() {
  return (
    <header className="flex items-center gap-3 justify-between">
        <div>
            <img src="./logo-small.svg" alt="" className="w-10 h-10 md:hidden"/>
            <img src="./logo-large.svg" alt="" className="hidden w-40 h-10 md:inline-block"/>
        </div>
        <div className="flex gap-1 items-center p-1 border border-neutral900 bg-neutral0 shadow-header rounded-full">
            <button className="px-3 py-2 bg-yellow500 border border-neutral900 text-preset4 font-semibold text-neutral900 rounded-full md:px-4 md:py-3">Study Mode</button>
            <button className="px-3 py-2 text-preset4 font-semibold text-neutral900 rounded-full md:px-4 md:py-3">All Cards</button>
        </div>
    </header>
  )
}

export default Header