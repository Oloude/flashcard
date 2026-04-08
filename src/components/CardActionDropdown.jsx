import useFlashCard from "../states/FlashCardState"

function CardActionDropdown({id}) {
  const openEditModal = useFlashCard(state => state.openEditModal);
  const openDeleteModal = useFlashCard(state => state.openDeleteModal);

  return (
    <div className="w-35 h-18 rounded-lg border border-neutral900 shadow-dropdown bg-neutral0 z-20 -top-19 right-2 absolute divide-y divide-neutral900 overflow-hidden">
        <button onClick={()=>openEditModal(id)} className="px-4 py-2 flex items-center gap-2 hover:bg-neutral100 text-preset5 text-neutral900 w-full"><img src="./icon-edit.svg" alt="" className="w-4 h-4"/> Edit</button>
        <button onClick={()=> openDeleteModal(id)} className="px-4 py-2 flex items-center gap-2 hover:bg-neutral100 text-preset5 text-neutral900 w-full"><img src="./icon-delete.svg" alt="" className="w-4 h-4"/> Delete</button>
    </div>
  )
}

export default CardActionDropdown