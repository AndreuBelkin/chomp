import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './slices/menu/menuSlice'
import shoppingSlice from './slices/shopping/shoppingSlice'
// ...

const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
    menu: menuSlice
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch