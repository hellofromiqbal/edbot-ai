import { createSlice } from '@reduxjs/toolkit';

export const tabIndexValueSlice = createSlice({
  name: 'tabIndexValue',
  initialState: {
    value: 0,
  },
  reducers: {
    setCurrentTabIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentTabIndex } = tabIndexValueSlice.actions;

export default tabIndexValueSlice.reducer;
