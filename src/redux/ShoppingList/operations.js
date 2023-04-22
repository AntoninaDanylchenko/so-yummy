import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5500';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM5OGZjMzJkZDU4ZGMwOGI2YmIyNyIsImVtYWlsIjoicGlja2FjdUBtYWlsLmNvbSIsImlhdCI6MTY4MjE2OTI0OSwiZXhwIjoxNjgyMTcyODQ5fQ.JTUA5KHa8dWwxNcrymuYbeTuzqO9SueMH__SOnTm2aA';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

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
      const response = await axios.patch('/shopping-list', ingredient);
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
