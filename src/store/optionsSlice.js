import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOptions: [],
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions: (state, action) => {
      state.selectedOptions = action.payload;
    },
    clearOptions: (state) => {
      state.selectedOptions = [];
    }
  },
});

export const { setOptions, clearOptions } = optionsSlice.actions;
export default optionsSlice.reducer;