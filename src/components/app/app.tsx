import { Route, BrowserRouter, Routes } from 'react-router-dom';
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

function App() {

  const offersList = useAppSelector((state) => state.offers);
  const offers = useAppSelector((state) => state.fullOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={<MainPage/>}
          />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute
                authorizationStatus={ AuthorizationStatus.Auth }
              >
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
      </BrowserRouter>
    </HelmetProvider>

  );
}

export { App };
