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
import { shoppingListReducer } from './ShoppingList/slice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const favoritePersistConfig = {
  key: 'fav',
  storage
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    recipe: recipeReducer,
    shoppingList: shoppingListReducer,
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
