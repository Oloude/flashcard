import { toast } from "react-toastify"
import useFlashCard from "../states/FlashCardState"

function DeleteCardModal() {
    const closeDeleteModal = useFlashCard(state => state.closeDeleteModal)
    const activeCard = useFlashCard(state => state.activeCard)
    const deleteFlashCard = useFlashCard(state => state.deleteFlashCard)

    function handleDeleteCard(){
        deleteFlashCard(activeCard)
        toast(({ closeToast }) => (
          <div className="flex items-center justify-between gap-4 w-75 h-10 bg-neutral0 border border-neutral900 px-4 py-2.5 shadow-emptyBtn shadwo-dropdown rounded-full">
            <p className="text-preset4 text-neutral900 font-medium font-inter">Card deleted.</p>
            <button onClick={closeToast}><img src="./icon-cross.svg" alt="" /></button>
          </div>
        ));
    }
  return (
    <div className="bg-neutral900/70 fixed top-0 left-0 w-full h-screen z-30 items-center justify-center flex">
        <div className="bg-neutral0 rounded-2xl border border-neutral900 border-r-4 border-b-4 divide-y divide-neutral900 flex flex-col font-inter max-w-150 w-full">
            <div className="flex flex-col gap-2 p-6">
                <h2 className="text-preset2 text-neutral900">Delete this card?</h2>
                <p className="text-preset4">This action can’t be undone.</p>
            </div>
            <div className="px-6 pt-3 pb-4 flex gap-4 justify-end items-center">
                <button onClick={closeDeleteModal} className="px-4 py-3 cursor-pointer border border-neutral900 rounded-full text-preset4 font-semibold bg-neutral0 text-neutral900">Cancel</button>
                <button onClick={handleDeleteCard} className=" shadow-emptyBtn bg-yellow500 text-neutral900 px-5 py-3 rounded-full border border-neutral900 text-preset4 font-semibold">Delete Card</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteCardModal