import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addMyRecipesOp = createAsyncThunk(
  'myRecipes/add',
  async (recipeId, thunkAPI) => {
    try {
      const r = await axios.post('/ownRecipes', { recipeId });
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMyRecipesOp = createAsyncThunk(
  'myRecipes/get',
  async (_, thunkAPI) => {
    try {
      const r = await axios.get('/ownRecipes');
      return r.data.recipes;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteMyRecipesOp = createAsyncThunk(
  'myRecipes/delete',
  async (recipeId, thunkAPI) => {
    try {
      const r = await axios.delete(`/ownRecipes/${recipeId}`);

      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
