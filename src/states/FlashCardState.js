import { create } from "zustand";

const useFlashCard = create((set) => ({
  isOpenCategoryDropdown: false,
  isStudyMode: true,
  toggleStudyMode: () => set((state) => ({ isStudyMode: !state.isStudyMode })),
  toggleOpenCategoryDropdown: () =>
    set((state) => ({ isOpenCategoryDropdown: !state.isOpenCategoryDropdown })),
}));

export default useFlashCard;
