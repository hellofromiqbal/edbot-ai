import { createSlice } from '@reduxjs/toolkit';

export const questionNumberSlice = createSlice({
  name: 'questionNumber',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementQuestionNumber: (state) => {
      state.value += 1;
    }
  },
});

export const { incrementQuestionNumber } = questionNumberSlice.actions;

export default questionNumberSlice.reducer;
