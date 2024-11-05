import { configureStore } from '@reduxjs/toolkit';
import progressSlice from './Slices/ProgressSlice';
import productSlice from './Slices/ProductSlice';

const store  = configureStore({
    reducer: {
        // reducers
        progress: progressSlice.reducer,
        product : productSlice.reducer,
    }
})

export default store;