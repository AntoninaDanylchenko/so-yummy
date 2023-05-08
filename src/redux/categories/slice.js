import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesList, fetchRecipesByCategory } from './operations';

const categoriesListSlice = createSlice({
  name: 'categoriesList',
  initialState: {
    items: [],
    recipes: [],
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchRecipesByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchRecipesByCategory.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const categoriesListReducer = categoriesListSlice.reducer;
