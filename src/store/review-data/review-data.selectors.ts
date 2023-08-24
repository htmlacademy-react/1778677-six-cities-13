import { NameSpace } from '../../const';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getReviewsCount = (state: State): number => state[NameSpace.Review].reviews.length;
export const isReviewsStatusLoading = (state: State): boolean => state[NameSpace.Review].isReviewsDataLoading;
export const getDisplayedComments = (state: State): Review[] => state[NameSpace.Review].displayedComments;
