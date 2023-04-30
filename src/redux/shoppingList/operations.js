import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/shopping-list');
      return response.data;
    } catch (error) {
      if (error.response.message) {
        return thunkAPI.rejectWithValue(error.response.message);
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  'shoppingList/add',
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.post('/shopping-list', ingredient);
      return response.data;
    } catch (error) {
      if (error.response.message) {
        return thunkAPI.rejectWithValue(error.response.message);
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const removeIngredientFromShoppingList = createAsyncThunk(
  'shoppingList/delete',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete('/shopping-list', {
        data: { id: id },
      });
      return response.data;
    } catch (error) {
      if (error.response.message) {
        return thunkAPI.rejectWithValue(error.response.message);
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);
