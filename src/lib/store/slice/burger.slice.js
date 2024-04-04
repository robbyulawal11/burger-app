import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allIngredients:[
        {
            id: "cheese",
            name: "Cheese",
            price: 5000
        },
        {
            id: "lettuce",
            name: "Lettuce",
            price: 1000
        },
        {
            id: "tomato",
            name: "Tomato",
            price: 2500
        },
        {
            id: "pickles",
            name: "Pickles",
            price: 2000
        },
        {
            id: "meat",
            name: "Meat",
            price: 14000
        },
        {
            id: "mayo",
            name: "Mayo",
            price: 4000
        },
        {
            id: "sauce",
            name: "Sauce",
            price: 4000
        }
    ],
    selectedIngredients:[],
    isReachMax: false,
    isDone: false,
    totalCost: 0,
}

export const burgerSlice = createSlice({
  name: 'burgerIngredients',
  initialState,
  reducers: {
    totalCostSet: (state, action) => {
        state.totalCost = action.payload
    },
    isReachMaxSet: (state, action) => {
        state.isReachMax = action.payload
    },
    isDoneSet: (state, action) => {
        state.isDone = action.payload
    },
    selectedIngredientsSet: (state, action) => {
        state.selectedIngredients = action.payload
    },
  },
})

export const { totalCostSet, isDoneSet, isReachMaxSet, selectedIngredientsSet } = burgerSlice.actions

export default burgerSlice.reducer