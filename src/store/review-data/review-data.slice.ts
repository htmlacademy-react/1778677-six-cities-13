import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchReviewsAction, sendCommentAction } from '../api-actions';
import { Reviews } from '../../types/state';

const initialState: Reviews = {
  reviews: [],
  isReviewsDataLoading: false,
};

export const reviewsData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
      });
  }
});
