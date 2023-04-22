import { createSlice } from '@reduxjs/toolkit';
import { getRecipeById } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialState,
  extraReducers: {
    [getRecipeById.pending]: handlePending,
    [getRecipeById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getRecipeById.rejected]: handleRejected,
  },
});

export const recipeReducer = recipeSlice.reducer;
