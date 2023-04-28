import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/authSlice';
import { favoriteReducer } from './favorite/favSlice';
import { recipeReducer } from './recipe/recipeSlice';
import { ingredientsReducer } from './ingredients/slice';
import { myRecipesReducer } from './myRecipes/myRecipesSlice';
import { ownRecipeReducer } from './addRecipe/slice';
import { recipesMainReducer } from './recipesMain/recipesMainSlice';
import { recipesPopularReducer } from './popularRecipes/recipesPopularSlice';
import { shoppingListReducer } from './shoppingList/slice';
import { categoriesListReducer } from './categories/slice';
import { themeReducer } from './theme/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    favorite: favoriteReducer,
    myRecipes: myRecipesReducer,
    recipe: recipeReducer,
    recipesMain: recipesMainReducer,
    recipesPopular: recipesPopularReducer,
    shoppingList: shoppingListReducer,
    categoriesList: categoriesListReducer,
    theme: themeReducer,
    ownRecipe: ownRecipeReducer,
    ingredients: ingredientsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
