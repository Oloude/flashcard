import { create } from "zustand";
import data from "../data.json";

const useFlashCard = create((set) => ({
  questionData: data.flashcards,
  isOpenCategoryDropdown: false,
  isStudyMode: true,
  toggleStudyMode: () => set((state) => ({ isStudyMode: !state.isStudyMode })),
  toggleOpenCategoryDropdown: () =>
    set((state) => ({ isOpenCategoryDropdown: !state.isOpenCategoryDropdown })),
}));

export default useFlashCard;
