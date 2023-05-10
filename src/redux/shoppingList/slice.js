import { createSlice } from '@reduxjs/toolkit';
import {
  fetchShoppingList,
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
} from './operations';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    error: null,
    isDeletedIngr: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchShoppingList.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addIngredientToShoppingList.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removeIngredientFromShoppingList.pending, state => {
        state.isDeletedIngr = true;
      })
      .addCase(removeIngredientFromShoppingList.fulfilled, (state, action) => {
        state.items = state.items.filter(
          ingredient => ingredient.id !== action.payload
        );
        state.error = null;
        state.isDeletedIngr = false;
      })
      .addCase(removeIngredientFromShoppingList.rejected, (state, action) => {
        state.error = action.payload;
        state.isDeletedIngr = false;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
