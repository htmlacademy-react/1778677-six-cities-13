import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { OffersList, FullOffer, CityOffer } from '../../types/offer';

export const getOffers = (state: State): OffersList[] => state[NameSpace.Offers].offers;
export const isOffersDataLoading = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getFullOffer = (state: State): FullOffer | null => state[NameSpace.Offers].fullOffer;
export const isFullOfferDataLoading = (state: State): boolean => state[NameSpace.Offers].isFullOfferDataLoading;
export const getNearbyOffers = (state: State): OffersList[] => state[NameSpace.Offers].nearbyOffers;
export const isNearbyOffersLoading = (state: State): boolean => state[NameSpace.Offers].isNearbyOffersLoading;
export const getActiveCity = (state: State): CityOffer | undefined => state[NameSpace.Offers].city;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;

