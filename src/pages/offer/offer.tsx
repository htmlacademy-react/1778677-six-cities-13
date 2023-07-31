import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo/logo';
import { useParams } from 'react-router-dom';
import { FullOffer, OffersList } from '../../types/offer';
import { CommentSubmissionForm } from '../../components/comment-submission-form/comment-submission-form';
import { Link } from 'react-router-dom';
import { AppRoute, BlockName, STARTS_COUNT } from '../../const';
import { Review } from '../../types/review';
import { PageNotFound } from '../page-not-found/page-not-found';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { Map } from '../../components/map/map';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { useState } from 'react';

type OfferProps = {
  offers: FullOffer[];
  offersList: OffersList[];
  reviews: Review[];
};


function Offer({ offers, offersList, reviews }: OfferProps){
  const [selectedOffer, setSelectedOffer] = useState< OffersList | undefined>(
    undefined
  );

  const handleListItemHover = (offerId: string) => {
    const currentOffer = offersList.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  const nearOffers = offersList.filter((item) => item.id !== params.id);
  if (!offer){
    return <PageNotFound/>;
  }
  return(
    <div className="page">
      <Helmet>
        <title>Предложение по аренде</title>
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={ item } alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium ? (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(offer.rating) * 100 / STARTS_COUNT}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value"> { offer.rating } </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {offer.maxAdults}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{ offer.price }</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li className="offer__inside-item" key={ good }>{ good }</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper offer__avatar-wrapper${ offer.host.isPro ? '--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={ offer.host.avatarUrl } width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    { offer.host.name }
                  </span>
                  <span className="offer__user-status">
                    { offer.host.isPro ? 'Pro' : '' }
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    { offer.description }
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={ reviews }/>
                <CommentSubmissionForm/>
              </section>
            </div>
          </div>
          <Map block={ BlockName.Offer } city={ offer.city } offers={ nearOffers } selectedOffer={ selectedOffer }/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CitiesCardList block={ BlockName.NearOffer } offersList={ nearOffers } onListItemHover={ handleListItemHover }/>
          </section>
        </div>
      </main>
    </div>


  );
}


export { Offer };
