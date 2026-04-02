function EmptyCard() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-130 bg-neutral0">
        <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-preset2 text-neutral900 text-center">No cards to study</h1>
            <p className="text-preset4 text-neutral600">You don’t have any cards yet. Add your first card in the All Cards tab.</p>
        </div>
        <button className="rounded-full border border-neutral900 text-preset4 font-medium text-neutral900 px-5 py-3 shadow-emptyBtn">Go to All Cards</button>
    </div>
  )
}

export default EmptyCard