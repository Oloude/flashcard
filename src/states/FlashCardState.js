import { create } from "zustand";
import data from "../data.json";
import { useActionState } from "react";

const useFlashCard = create((set) => ({
  questionData: data.flashcards,
  isOpenCategoryDropdown: false,
  isStudyMode: true,
  isOpenCardActionDropdown: false,
  isEditModalOpen: false,
  activeCard: null,
  isDeleteModalOpen: false,
  isShowAnswer: false,
  toggleShowAnswer: () =>
    set((state) => ({ isShowAnswer: !state.isShowAnswer })),
  openDeleteModal: (id) =>
    set((state) => ({
      activeCard: id,
      isDeleteModalOpen: true,
      isOpenCardActionDropdown: false,
    })),
  closeDeleteModal: () =>
    set((state) => ({ activeCard: null, isDeleteModalOpen: false })),
  closeEditModal: () =>
    set((state) => ({ isEditModalOpen: false, activeCard: null })),
  openEditModal: (id) =>
    set((state) => ({
      isEditModalOpen: true,
      activeCard: id,
      isOpenCardActionDropdown: false,
    })),
  toggleIsOpenCardActionDropdown: (id) =>
    set((state) => ({
      isOpenCardActionDropdown:
        state.isOpenCardActionDropdown === id ? null : id,
    })),
  toggleStudyMode: () => set((state) => ({ isStudyMode: !state.isStudyMode })),
  toggleOpenCategoryDropdown: () =>
    set((state) => ({ isOpenCategoryDropdown: !state.isOpenCategoryDropdown })),
  addNewFlashCard: (newFlashCard) =>
    set((state) => ({
      questionData: [...state.questionData, newFlashCard],
    })),
  deleteFlashCard: (id) =>
    set((state) => ({
      questionData: state.questionData.filter((card) => card.id !== id),
      isDeleteModalOpen: false,
    })),
  updateFlashCard: (id, updatedFlashCard) =>
    set((state) => ({
      questionData: state.questionData.map((card) =>
        card.id === id ? { ...card, ...updatedFlashCard } : card,
      ),
      isEditModalOpen: false,
    })),
}));

export default useFlashCard;
