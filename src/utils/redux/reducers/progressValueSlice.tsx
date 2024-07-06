import { createSlice } from '@reduxjs/toolkit';

export const progressValueSlice = createSlice({
  name: 'progressValue',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 20;
    }
  },
});

export const { increment } = progressValueSlice.actions;

export default progressValueSlice.reducer;
