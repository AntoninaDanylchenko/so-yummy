import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRecipes,
  addRecipe,
  removeRecipe,
  getOwnUserData,
} from './operations';

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
  totalItems: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ownRecipeSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload.result;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchRecipes.rejected, handleRejected)

      .addCase(addRecipe.pending, handlePending)
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes.push(action.payload);
      })
      .addCase(addRecipe.rejected, handleRejected)

      .addCase(removeRecipe.pending, handlePending)
      .addCase(removeRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.recipes.findIndex(
          recipe => recipe.id === action.payload.id
        );
        state.recipes.splice(index, 1);
      })
      .addCase(removeRecipe.rejected, handleRejected)

      .addCase(getOwnUserData.pending, handlePending)
      .addCase(getOwnUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload.result;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(getOwnUserData.rejected, handleRejected);
  },
});

export const { setCurrentPage } = ownRecipeSlice.actions;
export const ownRecipeReducer = ownRecipeSlice.reducer;
