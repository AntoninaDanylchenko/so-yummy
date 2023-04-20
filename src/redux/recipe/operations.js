import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:3000';

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
