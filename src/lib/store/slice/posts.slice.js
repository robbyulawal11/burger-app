import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listOfAllPosts: [],
    listOfFavoritePosts: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    listOfAllPostsSet: (state, action) => {
        state.listOfAllPosts = action.payload
    },
    listOfFavoritePostsSet: (state, action) => {
        state.listOfFavoritePosts = action.payload
    }
  },
})

export const { listOfAllPostsSet, listOfFavoritePostsSet} = postsSlice.actions

export default postsSlice.reducer