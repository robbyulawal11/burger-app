import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listOfAllCity: [  
      "Jakarta",
      "Surabaya",
      "Bandung",
      "Medan",
      "Semarang",
      "Palembang",
      "Makassar",
      "Depok",
      "Tangerang",
      "Bekasi",
      "Padang",
      "Bogor",
      "Bandar Lampung",
      "Malang",
      "Pekanbaru",
      "Denpasar",
      "Surakarta",
      "Banjarmasin"
    ],
    watherOfCity: []
}

export const weatherSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    listOfAllCitySet: (state, action) => {
        state.listOfAllPosts = action.payload
    },
    weatherOfCitySet: (state, action) => {
        state.listOfFavoritePosts = action.payload
    }
  },
})

export const { listOfAllCitySet, weatherOfCitySet} = weatherSlice.actions

export default weatherSlice.reducer