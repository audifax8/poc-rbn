import { createSlice } from '@reduxjs/toolkit';

export const configureCoreSlice = createSlice({
  name: 'configureCore',
  initialState: {
    loaded: false
  },
  reducers: {
    setLoaded: (state, action) => {
      state.loaded = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoaded } = configureCoreSlice.actions;

export default configureCoreSlice.reducer;