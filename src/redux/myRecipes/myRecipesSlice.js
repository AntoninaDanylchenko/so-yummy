import { createSlice } from '@reduxjs/toolkit';
import { addMyRecipesOp, getMyRecipesOp, deleteMyRecipesOp } from './operation';
import { toast } from 'react-hot-toast';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getMyRecipesOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMyRecipesOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        // state.favorite.isFavorite = action.payload.favorite;
      })
      .addCase(getMyRecipesOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(addMyRecipesOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(addMyRecipesOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addMyRecipesOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteMyRecipesOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteMyRecipesOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          recipe => recipe._id === action.payload.recipeId
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteMyRecipesOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.msg;
        toast.warn(`${action.payload.recipeId} not found`);
      });
  },
});

export const myRecipesReducer = myRecipesSlice.reducer;
