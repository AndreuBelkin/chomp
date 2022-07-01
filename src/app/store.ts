import { configureStore } from '@reduxjs/toolkit'
import shoppingSlice from './features/shopping/shoppingSlice'
// ...

const store = configureStore({
  reducer: {
    shopping: shoppingSlice
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch