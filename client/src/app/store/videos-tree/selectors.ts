import { createFeatureSelector, createSelector } from '@ngrx/store';
import {VideosTreeState,VideosTreeStoreFields} from './reducer'

export const selectVideosTreeState = createFeatureSelector<VideosTreeState>('VideosTree');

export const getVideosTreeList = createSelector(
	selectVideosTreeState, 
	(state: VideosTreeState): Node[] => state[VideosTreeStoreFields.NodesList]
);

export const getSearchWord = createSelector(
	selectVideosTreeState, 
	(state: VideosTreeState): string => state[VideosTreeStoreFields.SearchWord]
);