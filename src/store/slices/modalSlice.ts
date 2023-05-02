import { createSlice, createSelector } from "@reduxjs/toolkit";

export enum ModalTypes {
  AddAlbum = "AddAlbum",
  AddPhoto = "AddPhoto",
}

export interface Modal {
  isOpen: boolean;
  modalType: ModalTypes | string;
  modalErrors: any;
}

const initialState: Modal = {
  isOpen: false,
  modalType: "",
  modalErrors: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.modalType = "";
    },
    setModalErrors: (state, action) => {
      state.modalErrors = action.payload;
    },
    resetModalErrors: (state, action) => {
      state.modalErrors = {};
    },
  },
});

export default modalSlice.reducer;

export const { openModal, closeModal, setModalErrors, resetModalErrors } =
  modalSlice.actions;

export const selectModal = createSelector(
  (state: any) => state.modal,
  (modal) => modal
);
