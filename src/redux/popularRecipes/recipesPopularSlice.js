import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipesPopular } from './operations';

const recipesPopularSlice = createSlice({
  name: 'recipesPopular',
  initialState: {
    recipes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesPopular.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesPopular.fulfilled, (state, { payload }) => {
        state.recipes = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesPopular.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const recipesPopularReducer = recipesPopularSlice.reducer;
