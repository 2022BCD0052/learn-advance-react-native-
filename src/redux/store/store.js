import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/store';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
