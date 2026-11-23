import { createSlice } from "@reduxjs/toolkit";

type UiState = {
  menuOpen: boolean;
  snowEnabled: boolean;
};

const initialState: UiState = {
  menuOpen: false,
  snowEnabled: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    toggleSnow(state) {
      state.snowEnabled = !state.snowEnabled;
    },
  },
});

export const { toggleMenu, closeMenu, toggleSnow } = uiSlice.actions;
export default uiSlice.reducer;
