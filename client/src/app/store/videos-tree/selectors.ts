import { IVideo } from '@interfaces/related-video.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TreeNode } from 'src/app/core/models/tree.model';
import {VideosTreeState,VideosTreeStoreFields} from './reducer'

export const selectVideosTreeState = createFeatureSelector<VideosTreeState>('VideosTree');

export const getVideosTreeList = createSelector(
	selectVideosTreeState, 
	(state: VideosTreeState): TreeNode<IVideo>[][] => state[VideosTreeStoreFields.TreeNodesList]
);

export const getSearchWord = createSelector(
	selectVideosTreeState, 
	(state: VideosTreeState): string => state[VideosTreeStoreFields.SearchWord]
);

export const getCurrentBranch = createSelector(
	selectVideosTreeState,
	(state: VideosTreeState) => state
)