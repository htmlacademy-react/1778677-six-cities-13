import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { changeFavoritesStatusAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import classNames from 'classnames';
import { useState } from 'react';
import { updateFavoriteOffer } from '../../store/offers/offers.slice';

type BookmarkButtonProps = {
  id: string;
  isFavorite: boolean;
  isDetailed: boolean;
}

function BookmarkButton({id, isFavorite, isDetailed}: BookmarkButtonProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isFavoriteOffer, setIsFavoriteOffer] = useState(isFavorite);

  const handleBookmarkButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth || authorizationStatus === AuthorizationStatus.Unknown) {
      navigate(AppRoute.Login);
      return;
    }

    setIsFavoriteOffer((prevIsFavoriteOffer) => !prevIsFavoriteOffer);

    const favoriteInfo = {
      id: id,
      isFavorite: !isFavoriteOffer,
    };

    dispatch(changeFavoritesStatusAction(favoriteInfo));
    dispatch(updateFavoriteOffer(favoriteInfo));
  };

  return (
    <button className={classNames({
      'place-card__bookmark-button button': true,
      'place-card__bookmark-button--active': isFavorite
    })}
    type="button"
    onClick={handleBookmarkButtonClick}
    >
      <svg className="place-card__bookmark-icon" width={isDetailed ? 31 : 18} height={isDetailed ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export { BookmarkButton };
