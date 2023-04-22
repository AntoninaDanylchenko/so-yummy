import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5500';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDI0YmZjZjEyZjY1YmY0MTNiZWFkMCIsImVtYWlsIjoibjhzdHVzaWtrQG1haWwuY29tIiwiaWF0IjoxNjgyMTQ4MzU0LCJleHAiOjE2ODQ3NDAzNTR9.mLEwtu7_3mH80ioZ4Xu3xk6MoyOOArliFTf8YiPY1m8';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getRecipeById = createAsyncThunk(
  'recipe/getRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/id/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecipeToFavorite = createAsyncThunk(
  'recipe/addToFavoriteRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/favorite/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeRecipeFromFavorite = createAsyncThunk(
  'recipe/removeFromFavoriteRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorite/${id}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  'recipe/addIngredientToShoppingList',
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.post(`/shopping-list`, ingredient);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeIngredientFromShoppingList = createAsyncThunk(
  'recipe/removeIngredientFromShoppingList',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/shopping-list/${id}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
