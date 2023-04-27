import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const fetchRecipesMain = createAsyncThunk(
  'recipes/fetchMain',
  // https://soyummy-backend-first-team.onrender.com/api-docs/#/Modal/get_modal
  async (limit, thunkAPI) => {
    const URL = `https://soyummy-backend-first-team.onrender.com/recipes/main-page?limit=${limit}`;
    try {
      const response = await axios.get(URL);
      return response.data.map(({ _id, title, preview, thumb, category }) => ({
        id: _id,
        title,
        preview,
        thumb,
        categoryRecipe: category.toLowerCase(),
      }));
      // console.log(
      //   response.data.map(({ _id, title, preview, thumb, category }) => ({
      //     id: _id,
      //     title,
      //     preview,
      //     thumb,
      //     categoryRecipe: category.toLowerCase(),
      //   }))
      // );
    } catch (error) {
      toast.error('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
