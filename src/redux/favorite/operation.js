import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'http://localhost:3000';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const persistedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2Q5OTEyYTdkZjRiOThjNmRmMGJhZiIsImVtYWlsIjoicmhpbm9AZ21haWwuY29tIiwiaWF0IjoxNjgyMDE5ODEzLCJleHAiOjE2ODIwMjM0MTN9.k5mpktV4XVhpwKLDUQBhPFVFphJ_w0uXUMTJZCiNs6Y";


export const addFavoriteOp = createAsyncThunk(
    'fav/add',
    async (recipeId, thunkAPI) => {
        const state = thunkAPI.getState();
        // const persistedToken = state.auth.token;
        if (!persistedToken) {
            return thunkAPI.rejectWithValue('Unable to add favorite');
        }
        token.set(persistedToken);
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
        const state = thunkAPI.getState();
        // const persistedToken = state.auth.token;
        if (!persistedToken) {
            return thunkAPI.rejectWithValue('Unable to fetch favorite');
        }
        token.set(persistedToken);
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
        const state = thunkAPI.getState();
        // const persistedToken = state.auth.token;
        if (!persistedToken) {
            return thunkAPI.rejectWithValue('Unable to delete recipe');
        }
        token.set(persistedToken);
        try {
            const r = await axios.delete('/favorite', { recipeId });

            return r.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

