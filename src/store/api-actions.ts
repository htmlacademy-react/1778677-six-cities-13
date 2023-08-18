import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { FullOffer, OffersList } from '../types/offer.js';
import { offersCityList, requireAuthorization, setError, setUserInfo, setOffersDataLoadingStatus, redirectToRoute, setFullOfferDataLoadingStatus, setReviewsDataLoadingStatus, loadFullOffer, reviewsList, setNearbyOffersDataLoadingStatus, nearbyOffersList, sendCommentStatus } from './action';
import {saveToken, dropToken} from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Review } from '../types/review.js';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OffersList[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(offersCityList(data));
  },
);


export const fetchFullOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFullOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setFullOfferDataLoadingStatus(true));
    const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(setFullOfferDataLoadingStatus(false));
    dispatch(loadFullOffer(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/reviewsList',
  async (id, {dispatch, extra: api}) => {
    dispatch(setReviewsDataLoadingStatus(true));
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setReviewsDataLoadingStatus(false));
    dispatch(reviewsList(data));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/nearbyOffersList',
  async (id, {dispatch, extra: api}) => {
    dispatch(setNearbyOffersDataLoadingStatus(true));
    const { data } = await api.get<OffersList[]>(`${APIRoute.Offers}/${id}${APIRoute.NeabyOffers}`);
    dispatch(setNearbyOffersDataLoadingStatus(false));
    dispatch(nearbyOffersList(data));
  },
);

export const sendCommentAction = createAsyncThunk<void, Review, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendCommentStatus',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    dispatch(sendCommentStatus(true));
    await api.post<Review>(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(sendCommentStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(setUserInfo(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUserInfo(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setUserInfo(null));
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

