import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const fetchRecipesMain = createAsyncThunk(
  'recipes/fetchMain',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/main-page?limit=${limit}`);
      return response.data.map(({ _id, title, preview, thumb, category }) => ({
        id: _id,
        title,
        preview,
        thumb,
        categoryRecipe: category.toLowerCase(),
      }));
    } catch (error) {
      toast.error('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
