import { createSlice } from '@reduxjs/toolkit';

export const rxcSlice = createSlice({
  name: 'rxc',
  initialState: {
    scriptLoaded: false,
    enabled: false,
    on: false
  },
  reducers: {
    setScriptLoaded: (state, action) => {
      state.scriptLoaded = action.payload;
    },
    setEnabled: (state, action) => {
      state.enabled = action.payload;
    },
    setOn: (state, action) => {
      state.on = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setScriptLoaded, setEnabled, setOn } = rxcSlice.actions;

export default rxcSlice.reducer;