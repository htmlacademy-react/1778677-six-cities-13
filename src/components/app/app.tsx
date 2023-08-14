import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Offer } from '../../pages/offer/offer';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';
import { PrivateRoute } from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { LoadingPage } from '../../pages/loading-page';
import { HistoryRouter } from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { fetchOffersAction, checkAuthAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import * as selectors from '../../store/selectors.ts';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(checkAuthAction());
  }, [dispatch]);

  const offersList = useAppSelector(selectors.offersList);
  const offers = useAppSelector(selectors.offers);
  const reviews = useAppSelector(selectors.reviews);
  const authorizationStatus = useAppSelector(selectors.authorizationStatus);
  const isOffersDataLoading = useAppSelector(selectors.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={ browserHistory }>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={<MainPage/>}
          />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute authorizationStatus={ authorizationStatus }>
                <Favorites offersList={ offersList }/>
              </PrivateRoute>
            }
          />
          <Route
            path={ AppRoute.Login }
            element={ <Login /> }
          />
          <Route path={ `${AppRoute.Offer}/:id` } element={ <Offer offers={ offers } offersList={ offersList } reviews={ reviews }/> } />
          <Route
            path="*"
            element={ <PageNotFound />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export { App };
