import { InitialState } from './reducer';

export const offersList = (state: InitialState) => state.offers;
export const offers = (state: InitialState) => state.fullOffers;
export const reviews = (state: InitialState) => state.reviews;
export const authorizationStatus = (state: InitialState) => state.authorizationStatus;
export const isOffersDataLoading = (state: InitialState) => state.isOffersDataLoading;
export const userInfo = (state: InitialState) => state.userInfo;
