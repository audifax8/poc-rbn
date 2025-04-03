import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: false
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode } = uiSlice.actions;

export default uiSlice.reducer;