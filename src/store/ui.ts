import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: false,
    casToRender: []
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setCASToRender: (state, action) => {
      state.casToRender = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode, setCASToRender } = uiSlice.actions;

export default uiSlice.reducer;