import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIngredientsList = createAsyncThunk(
  'ingredients/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/ingredients');
      return data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
