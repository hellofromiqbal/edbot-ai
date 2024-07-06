import { createSlice } from '@reduxjs/toolkit';

export const questionNumberSlice = createSlice({
  name: 'questionNumber',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
});

export const { increment, decrement } = questionNumberSlice.actions;

export default questionNumberSlice.reducer;
