export const selectRecipeById = state => state.recipe.recipe.item;
export const selectRecipeIsLoading = state => state.recipe.recipe.isLoading;
export const selectRecipeError = state => state.recipe.recipe.error;

export const selectFavoriteRecipe = state => state.recipe.favorite.isFavorite;
export const selectFavoriteRecipeIsLoading = state => state.recipe.favorite.isLoading;
export const selectFavoriteRecipeError = state => state.recipe.favorite.error;

export const selectShoppingListError = state => state.recipe.shoppingList.error;