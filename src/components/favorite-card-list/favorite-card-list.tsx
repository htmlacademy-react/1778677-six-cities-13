import { FavoriteCard } from '../favorive-card/favorite-card';
import { OffersList } from '../../types/offer';

type FavoriteCardListProps = {
  favoritesOffers: OffersList[];
  cities: string[];
};

function FavoriteCardList ({ favoritesOffers, cities }: FavoriteCardListProps){
  return(
    <>
      {cities.map((city, i) => (
        <li className="favorites__locations-items" key={ favoritesOffers[i].id }>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href='#'>
                <span>{ city }</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            { favoritesOffers.filter((item) => item.city.name === city).map((item) => (
              <FavoriteCard key={ item.id } id={ item.id } title={ item.title } type={ item.type } price={ item.price } previewImage={ item.previewImage } isPremium={ item.isPremium } rating={ item.rating}/>
            ))}
          </div>
        </li>
      ))}
    </>
  );
}

export { FavoriteCardList };
