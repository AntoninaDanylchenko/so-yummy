import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


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

