export const selectRecipes = state => state.ownRecipe.recipes;
export const selectLoading = state => state.recipe.ownRecipe.isLoading;
export const selectError = state => state.recipe.ownRecipe.error;
export const selectTotalItems = state => state.recipe.ownRecipe.totalItems;
