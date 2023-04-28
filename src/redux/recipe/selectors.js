export const selectRecipeById = state => state.recipe.recipe.item;
export const selectRecipeIsLoading = state => state.recipe.recipe.isLoading;
export const selectRecipeError = state => state.recipe.recipe.error;

export const selectShoppingListError = state => state.recipe.shoppingList.error;