import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import searchReducer from './searchSlice';

const store = configureStore({
    reducer: {
        courses: coursesReducer,
        search: searchReducer,
    },
});

export default store;
