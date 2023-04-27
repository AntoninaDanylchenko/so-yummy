import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
