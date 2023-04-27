import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipesMain } from './operations';

const recipesMainSlice = createSlice({
  name: 'recipesMain',
  initialState: {
    recipes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesMain.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesMain.fulfilled, (state, { payload }) => {
        state.recipes = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesMain.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const recipesMainReducer = recipesMainSlice.reducer;
