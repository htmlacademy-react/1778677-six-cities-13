import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo/logo';
import { OffersList } from '../../types/offer';
import { FavoriteCardList } from '../../components/favorite-card-list/favorite-card-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoritesProps = {
  offersList: OffersList[];
};


function Favorites({ offersList}: FavoritesProps){
  const favoritesOffers : OffersList[] = offersList.filter((item) => item.isFavorite);
  const cities = favoritesOffers.reduce<string[]>((acc, item) => {
    const cityName = item.city.name;
    if (!acc.includes(cityName)) {
      acc.push(cityName);
    }
    return acc;
  }, []);

  return(
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={ AppRoute.Login }>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteCardList favoritesOffers={ favoritesOffers } cities = { cities }/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={ AppRoute.Main }>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>


  );
}

export { Favorites };
