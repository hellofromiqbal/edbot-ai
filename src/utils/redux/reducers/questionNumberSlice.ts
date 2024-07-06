import { createSlice } from '@reduxjs/toolkit';

export const questionNumberSlice = createSlice({
  name: 'questionNumber',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementQuestionNumber: (state) => {
      state.value += 1;
    },
    resetQuestionNumber: (state) => {
      state.value = 0;
    }
  },
});

export const { incrementQuestionNumber, resetQuestionNumber } = questionNumberSlice.actions;

export default questionNumberSlice.reducer;
