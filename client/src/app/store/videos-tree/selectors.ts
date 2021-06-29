import { IVideo } from '@interfaces/related-video.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPointer, ITreeNode } from 'src/app/core/models/tree.model';
import {VideosTreeState,VideosTreeStoreFields} from './reducer'

export const selectVideosTreeState = createFeatureSelector<VideosTreeState>('VideosTree');

export const getVideosTreeList = createSelector(
	selectVideosTreeState, 
	(state: VideosTreeState): ITreeNode<IVideo>[][] => state[VideosTreeStoreFields.TreeNodesList]
);

export const getSearchWord = createSelector(
	selectVideosTreeState, 
	(state: VideosTreeState): string => state[VideosTreeStoreFields.SearchWord]
);

export const getCurrentPointer = createSelector(
	selectVideosTreeState,
	(state: VideosTreeState) => state[VideosTreeStoreFields.CurrentPointer]
)

export const getVideosByPointer = (pointer: IPointer) => 
	createSelector(
		selectVideosTreeState,
		(state: VideosTreeState) => [
			state[VideosTreeStoreFields.TreeNodesList][pointer.generation][pointer.index],
			...state[VideosTreeStoreFields.TreeNodesList][pointer.generation][pointer.index].children
				.map(
					childPointer => state[VideosTreeStoreFields.TreeNodesList][childPointer.generation][childPointer.index]
				)
		]
	)