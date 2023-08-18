import { createReducer } from '@reduxjs/toolkit';
import { getCity } from '../utils';
import { changeCity, offersCityList, loadFullOffer, reviewsList, requireAuthorization, setUserInfo, setError, setOffersDataLoadingStatus, setFullOfferDataLoadingStatus, setReviewsDataLoadingStatus, nearbyOffersList, setNearbyOffersDataLoadingStatus, sendCommentStatus } from './action';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';
import { CityOffer, FullOffer, OffersList } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatusType } from '../types/authorization-status';
import { UserData } from '../types/user-data';

export type InitialState = {
  city: CityOffer | undefined;
  offers: OffersList[];
  fullOffer: FullOffer | null;
  reviews: Review[];
  nearbyOffers: OffersList[];
  authorizationStatus: AuthorizationStatusType;
  userInfo: UserData | null;
  error: string | null;
  isOffersDataLoading: boolean;
  isFullOfferDataLoading: boolean;
  isReviewsDataLoading: boolean;
  isNearbyOffersLoading: boolean;
  isCommentSend: boolean;
}

const defaultCity = getCity('Paris', CITIES_LOCATION);

const initialState : InitialState = {
  city: defaultCity,
  offers: [],
  fullOffer: null,
  reviews: [],
  nearbyOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  error: null,
  isOffersDataLoading: false,
  isFullOfferDataLoading: false,
  isReviewsDataLoading: false,
  isNearbyOffersLoading: false,
  isCommentSend: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFullOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(reviewsList, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(nearbyOffersList, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setFullOfferDataLoadingStatus, (state, action) => {
      state.isFullOfferDataLoading = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(setNearbyOffersDataLoadingStatus, (state, action) => {
      state.isNearbyOffersLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(sendCommentStatus, (state, action) => {
      state.isCommentSend = action.payload;
    });
});

export {reducer};
