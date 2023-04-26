import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk(
  'user/own-recipes',
  async ({ page = 1, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `user/own-recipes?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  'add/own-recipes',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/recipes', credentials);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeRecipe = createAsyncThunk(
  'remove/own-recipes',
  async (recipeId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/recipes/${recipeId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
