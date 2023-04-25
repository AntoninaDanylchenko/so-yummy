
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFavoriteOp = createAsyncThunk(
  'fav/add',
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
  'fav/get',
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
  'fav/delete',
  async (recipeId, thunkAPI) => {
    try {
      const r = await axios.delete('/favorite', { recipeId });

      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
