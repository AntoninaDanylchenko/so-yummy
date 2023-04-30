import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { getPoster } from '../recipesMain/operations';

export const fetchRecipesPopular = createAsyncThunk(
  'recipes/fetchPopular',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`popular-recipe?limit=${limit}`);
      return response.data.map(
        ({ _id, title, preview, thumb, instructions }) => ({
          id: _id,
          title,
          preview: getPoster(preview),
          thumb,
          desc: instructions.slice(0, 100) + '...',
        })
      );
    } catch (error) {
      toast.error('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
