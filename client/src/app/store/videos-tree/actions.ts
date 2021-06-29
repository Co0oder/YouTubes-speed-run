import { IRelatedVideosResponse, IVideo } from "@interfaces/related-video.interface";
import {createAction, props} from '@ngrx/store';
import { IPointer, ITreeNode } from "src/app/core/models/tree.model";
import { ISearchParams, ISearchRelatedParams } from "src/app/core/pages/main/main.interface";


const VIDEO_TREE_ACTIONS = {
    START_SEARCH: '[VIDEOS_TREE] START SEARCH',
    START_SEARCH_SUCCESS: '[VIDEOS_TREE] Start Search Success',
    START_SEARCH_FAILED: '[VIDEOS_TREE] Start Search Failed',
    SEARCH_FINISHED: '[VIDEOS_TREE] SEARCH FINISHED',
	RELATED_VIDEOS_REQUESTED: '[VIDEOS_TREE] Related Video Requested',
    RELATED_VIDEOS_SUCCESS: '[VIDEOS_TREE] Related Video Success',
    RELATED_VIDEOS_FAILED: '[VIDEOS_TREE] Related Video Failed',
    VIDEO_NODE_SELECTED: '[VIDEOS_TREE] Video TreeNode Selected',
    CHANGE_POINTER: '[VIDEOS_TREE] Change Pointer'
}


export const StartSearch = createAction(
    VIDEO_TREE_ACTIONS.START_SEARCH,
    props<ISearchParams>()
);

export const  StartSearchSucceed = createAction(
    VIDEO_TREE_ACTIONS.START_SEARCH_SUCCESS,
    props<{nodesList: ITreeNode<IVideo>[][]}>()
);

export const  StartSearchFailed = createAction(
    VIDEO_TREE_ACTIONS.START_SEARCH_FAILED,
    props<any>()
)

export const  SearchFinished = createAction(
    VIDEO_TREE_ACTIONS.SEARCH_FINISHED,
    props<{node: ITreeNode<IVideo>}>()
)


export const RequestRelatedVideo = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_REQUESTED,
    props<ISearchRelatedParams>()
);

export const RelatedVideoRequestSucceed = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_SUCCESS,
    props<{nodes: ITreeNode<IVideo>[][]}>()
);

export const RelatedVideoRequestFailed = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_FAILED,
    props<any>()
)

export const VideoTreeNodeSelected =  createAction(
    VIDEO_TREE_ACTIONS.VIDEO_NODE_SELECTED,
    props<any>()
)

export const ChangePointer = createAction(
    VIDEO_TREE_ACTIONS.CHANGE_POINTER,
    props<{pointer: IPointer}>()
)