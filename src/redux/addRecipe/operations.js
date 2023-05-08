import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk(
  'user/own-recipes',
  async ({ page = 1, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `user/ownRecipes?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/ownRecipes', credentials);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeRecipe = createAsyncThunk(
  'remove/ownRecipes',
  async (recipeId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/ownRecipes/${recipeId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOwnUserData = createAsyncThunk(
  'fetch/modal',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios('/modal', credentials);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
