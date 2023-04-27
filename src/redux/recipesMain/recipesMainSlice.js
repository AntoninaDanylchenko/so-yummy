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
      .addCase(fetchRecipesMain.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesMain.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recipesMainReducer = recipesMainSlice.reducer;
