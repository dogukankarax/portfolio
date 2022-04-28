import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../components/styles/Themes";

const initialState = {
  defaultTheme: lightTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.defaultTheme = darkTheme;
    },
    toggleLightMode: (state) => {
      state.defaultTheme = lightTheme;
    },
  },
});

export const { toggleDarkMode, toggleLightMode } = themeSlice.actions;

export default themeSlice.reducer;
