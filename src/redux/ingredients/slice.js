import { createSlice } from '@reduxjs/toolkit';

import { fetchIngredientsList } from './operations';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payoad;
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: {
    [fetchIngredientsList.pending]: handlePending,
    [fetchIngredientsList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.ingredients = action.payload;
    },
    [fetchIngredientsList.rejected]: handleRejected,
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
