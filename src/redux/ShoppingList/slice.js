import { createSlice } from '@reduxjs/toolkit';
import { fetchShoppingList } from './operations';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    isFetchingShoppingList: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, state => {
        state.isFetchingShoppingList = true;
        state.error = null;
      })
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isFetchingShoppingList = false;
        state.error = null;
      })
      .addCase(fetchShoppingList.rejected, (state, action) => {
        state.isFetchingShoppingList = false;
        state.error = action.payload;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
