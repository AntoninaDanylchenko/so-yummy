import { createSlice } from '@reduxjs/toolkit';
import { addFavoriteOp, getFavoriteOp, deleteFavoriteOp } from './operation';
import { toast } from 'react-hot-toast';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavoriteOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavoriteOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        // state.favorite.isFavorite = action.payload.favorite;
      })
      .addCase(getFavoriteOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(addFavoriteOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFavoriteOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFavoriteOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavoriteOp.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFavoriteOp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          recipe => recipe.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteFavoriteOp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.msg;
        toast.warning(`${action.payload.contactId} not found`);
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;

//   extraReducers: {
//     [getFavoriteOp.pending](state) {
//       state.isLoading = true;
//     },
//     [getFavoriteOp.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [getFavoriteOp.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//       toast.error(action.payload);
//     },

//     [addFavoriteOp.pending](state) {
//       state.isLoading = true;
//     },
//     [addFavoriteOp.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addFavoriteOp.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     [deleteFavoriteOp.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteFavoriteOp.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         recipe => recipe.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteFavoriteOp.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload.msg;
//       toast.warning(`${action.payload.contactId} not found`);
//     },
//   },
// });

// export const favoriteReducer = favoriteSlice.reducer;
