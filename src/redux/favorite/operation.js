import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFavoriteOp = createAsyncThunk(
  'favorite/add',
  async (recipeId, thunkAPI) => {
    try {
      const r = await axios.post('/favorite', { recipeId });
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFavoriteOp = createAsyncThunk(
  'favorite/get',
  async (_, thunkAPI) => {
    try {
      const r = await axios.get('/favorite');

      return r.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavoriteOp = createAsyncThunk(
  'favorite/delete',
  async (recipeId, thunkAPI) => {
    try {
      await axios.delete('/favorite', { data: { recipeId } });
      return { recipeId };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
