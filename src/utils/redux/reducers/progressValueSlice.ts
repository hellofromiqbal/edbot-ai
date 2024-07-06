import { createSlice } from '@reduxjs/toolkit';

export const progressValueSlice = createSlice({
  name: 'progressValue',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementProgressValue: (state) => {
      state.value += 20;
    }
  },
});

export const { incrementProgressValue } = progressValueSlice.actions;

export default progressValueSlice.reducer;
