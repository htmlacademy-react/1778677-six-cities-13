import { createAction } from '@reduxjs/toolkit';
import { CityOffer, FullOffer, OffersList } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatusType } from '../types/authorization-status';


const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
  payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
  payload: offers
}));

const fullOffersList = createAction('offers/fullOffersList', (fullOffers: FullOffer[]) => ({
  payload: fullOffers
}));

const reviewsList = createAction('offers/reviews', (reviews: Review[]) => ({
  payload: reviews
}));

const requireAuthorization = createAction('user/requireAuthorization', (authStatus: AuthorizationStatusType) => ({
  payload: authStatus
}));

const setError = createAction('setError', (error: string | null) =>({
  payload: error
}));

const setOffersDataLoadingStatus = createAction('setOffersDataLoadingStatus', (offersLoadingStatus: boolean)=> ({
  payload: offersLoadingStatus
}));


export { changeCity, offersCityList, fullOffersList, reviewsList, requireAuthorization, setError, setOffersDataLoadingStatus };

