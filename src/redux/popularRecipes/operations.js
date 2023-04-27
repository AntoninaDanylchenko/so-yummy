import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const fetchRecipesPopular = createAsyncThunk(
  'recipes/fetchPopular',
  // https://soyummy-backend-first-team.onrender.com/api-docs/#/Modal/get_modal
  async (limit, thunkAPI) => {
    const URL = `https://soyummy-backend-first-team.onrender.com/popular-recipe?limit=${limit}`;
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      toast.error('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
