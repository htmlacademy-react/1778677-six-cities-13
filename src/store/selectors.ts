import { InitialState } from './reducer';

export const offersList = (state: InitialState) => state.offers;
export const offer = (state: InitialState) => state.fullOffer;
export const reviews = (state: InitialState) => state.reviews;
export const nearbyOffersList = (state: InitialState) => state.nearbyOffers;
export const authorizationStatus = (state: InitialState) => state.authorizationStatus;
export const isOffersDataLoading = (state: InitialState) => state.isOffersDataLoading;
export const isFullOfferDataLoading = (state: InitialState) => state.isFullOfferDataLoading;
export const isReviewsDataLoading = (state: InitialState) => state.isReviewsDataLoading;
export const isNearbyOffersLoading = (state: InitialState) => state.isNearbyOffersLoading;
export const userInfo = (state: InitialState) => state.userInfo;
export const isCommentSend = (state: InitialState) => state.isCommentSend;
