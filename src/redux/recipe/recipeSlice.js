import { createSlice } from '@reduxjs/toolkit';
import {
  addIngredientToShoppingList,
  addRecipeToFavorite,
  getRecipeById,
  removeIngredientFromShoppingList,
  removeRecipeFromFavorite,
} from './operations';

const initialState = {
  recipe: {
    item: null,
    isLoading: false,
    error: null,
  },
  favorite: {
    isFavorite: false,
    isLoading: false,
    error: null,
  },
  shoppingList: {
    error: null,
  },
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getRecipeById.pending, state => {
        state.recipe.isLoading = true;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipe.isLoading = false;
        state.recipe.error = null;
        state.recipe.item = action.payload;
        state.favorite.isFavorite = action.payload.favorite;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.recipe.isLoading = false;
        state.recipe.error = action.payload;
      })

      .addCase(addRecipeToFavorite.pending, state => {
        state.favorite.isLoading = true;
      })
      .addCase(addRecipeToFavorite.fulfilled, state => {
        state.favorite.isFavorite = true;
        state.favorite.isLoading = false;
        state.favorite.error = false;
      })
      .addCase(addRecipeToFavorite.rejected, (state, action) => {
        state.favorite.isLoading = false;
        state.favorite.error = action.payload;
      })

      .addCase(removeRecipeFromFavorite.pending)
      .addCase(removeRecipeFromFavorite.fulfilled, state => {
        state.favorite.isFavorite = false;
        state.favorite.isLoading = false;
        state.favorite.error = false;
      })
      .addCase(removeRecipeFromFavorite.rejected)

      .addCase(addIngredientToShoppingList.pending)
      .addCase(addIngredientToShoppingList.fulfilled)
      .addCase(addIngredientToShoppingList.rejected, (state, action) => {
        state.shoppingList.error = action.payload;
      })

      .addCase(removeIngredientFromShoppingList.pending)
      .addCase(removeIngredientFromShoppingList.fulfilled)
      .addCase(removeIngredientFromShoppingList.rejected, (state, action) => {
        state.shoppingList.error = action.payload;
      });
  },
});

export const recipeReducer = recipeSlice.reducer;
