
// Importing the `configureStore` function from Redux Toolkit, 
// which simplifies the process of creating and configuring a Redux store.
import {configureStore} from '@reduxjs/toolkit';
// Importing the `todoReducer` from the `todoSlice` file.
// This reducer will handle the state and actions related to todos.
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer  // Assigning the reducer for the todos feature.
})