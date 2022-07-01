import { createSlice } from '@reduxjs/toolkit'

interface IShoppingBasket {
    countItems: number
}

const initState: IShoppingBasket = {
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

export default shoppingSlice.reducer