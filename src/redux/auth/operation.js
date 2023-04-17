import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://localhost:3000';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const r = await axios.post('/users/signup', credentials);
      token.set(r.data.token);
      return r.data;
    } catch (error) {
      toast.error('This user is already registered.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const r = await axios.post('/users/login', credentials);
      token.set(r.data.token);
      return r.data;
    } catch (error) {
      toast.error('Password is incorrect.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const r = await axios.get('/users/current');

      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
