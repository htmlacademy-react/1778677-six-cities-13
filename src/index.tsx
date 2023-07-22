import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Setting } from './const';
import { offersList } from './mocks/offers-list';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={ Setting.RentalOffersCount }
      offersList = { offersList }
      offers = { offers }
      reviews = { reviews }
    />
  </React.StrictMode>
);
