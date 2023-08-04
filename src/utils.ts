import { CityOffer, OffersList } from './types/offer';

function getOffersByCity (city: string | undefined, offers: OffersList[]): OffersList[]{
  return offers.filter((offer) => offer.city.name === city);
}

function getCity(selectedCity: string | undefined, cities: CityOffer[]): CityOffer| undefined{
  return cities.find((item) => item.name === selectedCity);
}


export { getOffersByCity, getCity };
