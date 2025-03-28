import { createSlice } from '@reduxjs/toolkit';

export const vmSlice = createSlice({
  name: 'vm',
  initialState: {
    scriptLoaded: false,
    enabled: false,
    on: false
  },
  reducers: {
  },
});

// Action creators are generated for each case reducer function
//export const { set2D, set3D } = rtrSlice.actions;

export default vmSlice.reducer;