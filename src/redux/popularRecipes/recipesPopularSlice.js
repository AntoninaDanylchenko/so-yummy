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
      .addCase(fetchRecipesPopular.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recipesPopularReducer = recipesPopularSlice.reducer;
