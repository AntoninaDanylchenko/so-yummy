import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addMyRecipesOp = createAsyncThunk(
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

export const getMyRecipesOp = createAsyncThunk(
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

export const deleteMyRecipesOp = createAsyncThunk(
  'favorite/delete',
  async (recipeId, thunkAPI) => {
    try {
      const r = await axios.delete('/favorite', { recipeId });

      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
