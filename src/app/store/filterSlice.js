import recipes from "@/app/data/recipes.json"
import tags from "@/app/data/tags.json"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  recipes: recipes,
  tags: tags,
  searchString: "",
  activeTag: null,
}

const reducers = {
  setSearchString: (state, action) => {
    console.log("search:", action.payload)
    state.searchString = action.payload
    state.activeTag = null
  },
  setActiveTag: (state, action) => {
    console.log("tag:", action.payload)
    state.activeTag = state.activeTag === action.payload ? null : action.payload
    state.searchString = ""
  },
}

export const selectFilteredRecipes = (state) => {
  if (state.filter.activeTag) {
    return state.filter.recipes.filter((recipe) => {
      return recipe.tags.includes(state.filter.activeTag)
    })
  }
  if (state.filter.searchString) {
    return state.filter.recipes.filter((recipe) => {
      return (
        recipe.title.toLowerCase().includes(state.filter.searchString.toLowerCase()) ||
        recipe.tags.join(" ").toLowerCase().includes(state.filter.searchString.toLowerCase())
      )
    })
  }
  return state.filter.recipes
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers,
})

export const { setSearchString, setActiveTag } = filterSlice.actions

export default filterSlice.reducer
