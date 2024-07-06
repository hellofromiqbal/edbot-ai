import { createSlice } from '@reduxjs/toolkit';

export const passageFontSizeSlice = createSlice({
  name: 'passageFontSize',
  initialState: {
    value: 14,
  },
  reducers: {
    setFontSize(state, action) {
      switch (action.payload) {
        case 50:
          state.value = 16;
          break;
        case 100:
          state.value = 18;
          break;
        default:
          state.value = 14;
      }
    }
  },
});

export const { setFontSize } = passageFontSizeSlice.actions;

export default passageFontSizeSlice.reducer;
