export const selectCategoriesList = state => state.categoriesList.items;
export const selectRecipesByCategory = state =>
  state.categoriesList.recipes.recipesList;
export const selectIsLoading = state => state.categoriesList.isLoading;
