import { createSlice } from '@reduxjs/toolkit'
import store, { RootState } from '../../store'
import menuList from './menuList'

export const menuSlice = createSlice({
    name: 'menu',
    initialState: menuList,
    reducers: {}
})

export const getMenu = (state: RootState) => state.menu
export default menuSlice.reducer
