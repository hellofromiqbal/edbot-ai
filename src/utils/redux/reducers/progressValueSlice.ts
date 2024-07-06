import { createSlice } from '@reduxjs/toolkit';

export const progressValueSlice = createSlice({
  name: 'progressValue',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementProgressValue: (state) => {
      state.value += 20;
    },
    resetProgressValue: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementProgressValue, resetProgressValue } = progressValueSlice.actions;

export default progressValueSlice.reducer;
