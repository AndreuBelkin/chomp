import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface IShoppingCart {
    countItems: number
}

const initState: IShoppingCart = {
    countItems: 0
}

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: initState,
    reducers: {
        addItem: state => {
            state.countItems += 1
        }
    }
})

export const { addItem } = shoppingSlice.actions
export const getCountShoppingItems = (state: RootState) => state.shopping.countItems
export default shoppingSlice.reducer