import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategoriesList = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/category-list');
      return response.data;
    } catch (error) {
      if (error.response.message) {
        return thunkAPI.rejectWithValue(error.response.message);
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  'categories/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${category}`);
      return response.data;
    } catch (error) {
      if (error.response.message) {
        return thunkAPI.rejectWithValue(error.response.message);
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);
