import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listOfAllRecipe: []
}

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    listOfAllRecipeSet: (state, action) => {
        state.listOfAllRecipe = action.payload
    }
  },
})

export const { listOfAllRecipeSet} = recipeSlice.actions

export default recipeSlice.reducer