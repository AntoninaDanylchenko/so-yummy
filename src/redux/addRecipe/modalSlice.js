import { createSlice } from '@reduxjs/toolkit';
import { getOwnUserData } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  ownData: [],
  // daysUseApp: 0,
  // totalOwnRecipes: 0,
  // totalFavoriteRecipe: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const ownModalSlice = createSlice({
  name: 'ownModal',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getOwnUserData.pending, handlePending)
      .addCase(getOwnUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.totalOwnRecipes = action.payload.data.amoutOwnRecipes;
        // state.totalFavoriteRecipe = action.payload.data.amoutFavoriteRecipes;
        // state.daysUseApp = action.payload.data.days;
        state.ownData = action.payload.data;
      })
      .addCase(getOwnUserData.rejected, handleRejected);
  },
});

export const ownModalReducer = ownModalSlice.reducer;
