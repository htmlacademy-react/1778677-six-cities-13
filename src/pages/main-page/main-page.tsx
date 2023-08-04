import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { Logo } from '../../components/logo/logo';
import { OffersList } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, BlockName } from '../../const';
import { Map } from '../../components/map/map';
import { CitiesList } from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import { getOffersByCity } from '../../utils';
import { SortOptions } from '../../components/sort-options/sort-options';
import { SortOffer } from '../../types/sort';
import { sortOffersByType } from '../../utils';

function MainPage() {
  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(selectedCity?.name, offersList);
  const rentalOffersCount = selectedCityOffers.length;

  const [selectedOffer, setSelectedOffer] = useState< OffersList | undefined>(
    undefined
  );
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

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
            <CitiesList selectedCity={ selectedCity } />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> { rentalOffersCount } places to stay in { selectedCity?.name }</b>
              <SortOptions activeSorting={ activeSort } onChange={ (newSorting) => setActiveSort(newSorting) }/>
              <CitiesCardList block={ BlockName.AllPages } offersList={ sortOffersByType(selectedCityOffers, activeSort) } onListItemHover={ handleListItemHover }/>
            </section>
            <div className="cities__right-section">
              <Map block={ BlockName.AllPages } city={ selectedCity } offers={ selectedCityOffers } selectedOffer={ selectedOffer } />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export { MainPage };
