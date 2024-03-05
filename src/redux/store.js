import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { api } from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
