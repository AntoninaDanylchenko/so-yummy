import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://soyummy-backend-first-team.onrender.com';

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
      const r = await axios.post('/auth/signup', credentials);
      await token.set(r.data.token);
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
      const r = await axios.post('/auth/login', credentials);
      await token.set(r.data.token);
      return r.data;
    } catch (error) {
      toast.error('Password is incorrect.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userUpdate = createAsyncThunk(
  'auth/userUpdate',
  async (credentials, thunkAPI) => {
    try {
      const r = await axios.patch('/auth/user', credentials);
      return r.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    await token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = await thunkAPI.getState();
    const persistedToken = await state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const r = await axios.get('/auth/current');

      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
