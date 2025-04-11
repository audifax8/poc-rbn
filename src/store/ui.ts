import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: false,
    casToRender: [],
    skeletonCas: [
      {
        id: 0,
        alias: 'frame_sku',
        icon: 'frame',
        selectedAvId: null,
        skeleton: true
      },
      {
        id: 1,
        alias: 'lenses_sku',
        icon: 'lens',
        selectedAvId: null,
        skeleton: true
      },    
      {
        id: 2,
        alias: 'temple_tips_sku',
        icon: 'temple',
        selectedAvId: null,
        skeleton: true
      }
    ],
    menuOpen: false
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setCASToRender: (state, action) => {
      state.casToRender = action.payload;
    },
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode, setCASToRender, setMenuOpen } = uiSlice.actions;

export default uiSlice.reducer;