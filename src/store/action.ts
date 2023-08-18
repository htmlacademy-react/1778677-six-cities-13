import { createAction } from '@reduxjs/toolkit';
import { CityOffer, FullOffer, OffersList } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatusType } from '../types/authorization-status';
import { AppRouteType } from '../types/approute';
import { UserData } from '../types/user-data';

const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
  payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
  payload: offers
}));

const loadFullOffer = createAction('offers/loadFullOffer', (fullOffer: FullOffer) => ({
  payload: fullOffer
}));

const reviewsList = createAction('offers/reviews', (reviews: Review[]) => ({
  payload: reviews
}));

const nearbyOffersList = createAction('offers/nearbyOffersList', (nearbyOffers: OffersList[]) => ({
  payload: nearbyOffers
}));

const requireAuthorization = createAction('user/requireAuthorization', (authStatus: AuthorizationStatusType) => ({
  payload: authStatus
}));

const setUserInfo = createAction('user/setUserInfo', (userInfo: UserData | null) => ({
  payload: userInfo
}));

const setError = createAction('setError', (error: string | null) =>({
  payload: error
}));

const setOffersDataLoadingStatus = createAction('setOffersDataLoadingStatus', (offersLoadingStatus: boolean)=> ({
  payload: offersLoadingStatus
}));

const setFullOfferDataLoadingStatus = createAction('setFullOfferDataLoadingStatus', (fullOfferLoadingStatus: boolean)=> ({
  payload: fullOfferLoadingStatus
}));

const setNearbyOffersDataLoadingStatus = createAction('setNearbyOffersDataLoadingStatus', (nearbyOffersLoadingStatus: boolean)=> ({
  payload: nearbyOffersLoadingStatus
}));

const setReviewsDataLoadingStatus = createAction('setReviewsDataLoadingStatus', (reviesLoadingStatus: boolean)=> ({
  payload: reviesLoadingStatus
}));

const redirectToRoute = createAction('redirectToRoute',(appRoute: AppRouteType) => ({
  payload: appRoute
}));

const sendCommentStatus = createAction('sendCommentStatus',(newCommentStatus: boolean) => ({
  payload: newCommentStatus
}));

export { changeCity, offersCityList, loadFullOffer, reviewsList, nearbyOffersList, requireAuthorization, setUserInfo, setError, setOffersDataLoadingStatus, setFullOfferDataLoadingStatus, setReviewsDataLoadingStatus, setNearbyOffersDataLoadingStatus, redirectToRoute, sendCommentStatus };

