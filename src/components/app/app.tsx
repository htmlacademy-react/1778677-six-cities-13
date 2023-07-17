import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { MainPage } from '../../pages/main-page/main-page';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Offer } from '../../pages/offer/offer';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';
import { PrivateRoute } from '../private-route/private-route';


type AppMainPageProps = {
  rentalOffersCount :number;
  cardsCount: number;
}

function App({ rentalOffersCount, cardsCount }: AppMainPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={<MainPage rentalOffersCount={ rentalOffersCount } cardsCount={ cardsCount } />}
          />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute
                authorizationStatus={ AuthorizationStatus.NoAuth }
              >
                <Favorites />

              </PrivateRoute>
            }
          />
          <Route
            path={ AppRoute.Login }
            element={ <Login /> }
          />
          <Route path={ AppRoute.Offer } element={ <Offer /> } />
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
