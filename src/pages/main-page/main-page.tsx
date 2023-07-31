import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { Logo } from '../../components/logo/logo';
import { CityOffer, OffersList } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, BlockName } from '../../const';
import { Map } from '../../components/map/map';

type MainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  city: CityOffer;
}

function MainPage({ rentalOffersCount, offersList, city }: MainPageProps) {
  const [selectedOffer, setSelectedOffer] = useState< OffersList | undefined>(
    undefined
  );

  const handleListItemHover = (offerId: string) => {
    const currentOffer = offersList.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов</title>
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to="#">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> { rentalOffersCount } places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CitiesCardList block={ BlockName.AllPages } offersList={ offersList } onListItemHover={ handleListItemHover }/>
            </section>
            <div className="cities__right-section">
              <Map block={ BlockName.AllPages } city={city} offers={ offersList } selectedOffer={ selectedOffer } />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export { MainPage };
