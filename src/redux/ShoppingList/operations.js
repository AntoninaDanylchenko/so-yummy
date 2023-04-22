import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE3Mjg2NWM4YWM2NTUzMzRlZTYwMCIsImVtYWlsIjoicXdlcnR5MkBtYWlsLmNvbSIsImlhdCI6MTY4MjAxMDc4OCwiZXhwIjoxNjgyMDE0Mzg4fQ.w9EhbvCio4QUg3mkwILdbedevgZ0FmgJAzPAd8o0Sv0';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

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
