import {createSlice} from '@reduxjs/toolkit';

//action ,reducer, store
export const Counterslice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const {increment, decrement, reset} = Counterslice.actions;
export default Counterslice.reducer; //export reducer
