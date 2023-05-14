export const selectRecipes = state => state.ownRecipe.recipes;
export const selectLoading = state => state.ownRecipe.isLoading;
export const selectError = state => state.ownRecipe.error;
export const selectTotalItems = state => state.ownRecipe.totalItems;
export const selectOwnData = state => state.ownModal.ownModal;
