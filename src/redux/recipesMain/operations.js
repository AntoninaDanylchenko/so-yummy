import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import Default_img from 'images/notFound/default_recipe.png';

export const fetchRecipesMain = createAsyncThunk(
  'recipes/fetchMain',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/main-page?limit=${limit}`);
      return response.data.map(({ _id, title, preview, thumb, category }) => ({
        id: _id,
        title,
        preview: getPoster(preview),
        thumb,
        categoryRecipe: category.toLowerCase(),
      }));
    } catch (error) {
      toast.error('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPoster = poster => (poster ? poster : Default_img);
