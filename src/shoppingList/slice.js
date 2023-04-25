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
      .addCase(removeIngredientFromShoppingList.fulfilled, (state, action) => {
        state.items = state.items.filter(
          ingredient => ingredient.id !== action.payload
        );
        state.error = null;
      })
      .addCase(removeIngredientFromShoppingList.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
