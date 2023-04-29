import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const fetchSubscribe = createAsyncThunk('/subscribe', async thunkAPI => {
  try {
    return await axios.post(`/subscribe`).data;
  } catch (error) {
    toast.error('Something wrong. Try again.');
    return thunkAPI.rejectWithValue(error.message);
  }
});
