import { configureStore } from '@reduxjs/toolkit';
import { Counterslice } from '../slice/counderSlice';
export const store  = configureStore({
    reducer: {
        counter : Counterslice,
    },
});
