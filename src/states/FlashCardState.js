import { create } from "zustand";

const useFlashCard = create((set) => ({
  isOpenCategoryDropdown: false,
  toggleOpenCategoryDropdown: () =>
    set((state) => ({ isOpenCategoryDropdown: !state.isOpenCategoryDropdown })),
}));

export default useFlashCard;
