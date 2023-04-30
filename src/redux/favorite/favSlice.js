import { createSlice } from '@reduxjs/toolkit';
import { addFavoriteOp, getFavoriteOp, deleteFavoriteOp } from './operation';
import { toast } from 'react-hot-toast';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavoriteOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavoriteOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getFavoriteOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(addFavoriteOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFavoriteOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFavoriteOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavoriteOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFavoriteOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          recipe => recipe._id === action.payload.recipeId
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteFavoriteOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.msg;
        toast.warn(`${action.payload.recipeId} not found`);
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;
