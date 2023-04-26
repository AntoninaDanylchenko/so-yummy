import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIngredientsList = createAsyncThunk(
  '/list',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('ingredients/list');
      return data.ingredientList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
