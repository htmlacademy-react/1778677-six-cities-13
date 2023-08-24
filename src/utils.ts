import { CityOffer, OffersList } from './types/offer';
import { SortOffer } from './types/sort';
import { SortOffersType } from './const';

function getOffersByCity (city: string | undefined, offers: OffersList[]): OffersList[]{
  return offers.filter((offer) => offer.city.name === city);
}

function getCity(selectedCity: string | undefined, cities: CityOffer[]): CityOffer| undefined{
  return cities.find((item) => item.name === selectedCity);
}

function sortOffersByType (offers: OffersList[], offersDefault: OffersList[] ,type: SortOffer): OffersList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offersDefault;
  }
}


export { getOffersByCity, getCity, sortOffersByType };
