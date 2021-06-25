import { IRelatedVideosResponse, IVideo } from "@interfaces/related-video.interface";
import {createAction, props} from '@ngrx/store';
import { TreeNode } from "src/app/core/models/tree.model";
import { ISearchParams, ISearchRelatedParams } from "src/app/core/pages/main/main.interface";


const VIDEO_TREE_ACTIONS = {
    START_SEARCH: '[VIDEOS_TREE] START SEARCH',
    START_SEARCH_SUCCESS: '[VIDEOS_TREE] Start Search Success',
    START_SEARCH_FAILED: '[VIDEOS_TREE] Start Search Failed',
    SEARCH_FINISHED: '[VIDEOS_TREE] SEARCH FINISHED',
	RELATED_VIDEOS_REQUESTED: '[VIDEOS_TREE] Related Video Requested',
    RELATED_VIDEOS_SUCCESS: '[VIDEOS_TREE] Related Video Success',
    RELATED_VIDEOS_FAILED: '[VIDEOS_TREE] Related Video Failed',
    VIDEO_NODE_SELECTED: '[VIDEOS_TREE] Video TreeNode Selected'
}


export const StartSearch = createAction(
    VIDEO_TREE_ACTIONS.START_SEARCH,
    props<ISearchParams>()
);

export const  StartSearchSucceed = createAction(
    VIDEO_TREE_ACTIONS.START_SEARCH_SUCCESS,
    props<{node: TreeNode<IVideo>}>()
);

export const  StartSearchFailed = createAction(
    VIDEO_TREE_ACTIONS.START_SEARCH_FAILED,
    props<any>()
)

export const  SearchFinished = createAction(
    VIDEO_TREE_ACTIONS.SEARCH_FINISHED,
    props<{node: TreeNode<IVideo>}>()
)


export const RequestRelatedVideo = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_REQUESTED,
    props<ISearchRelatedParams>()
);

export const RelatedVideoRequestSucceed = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_SUCCESS,
    props<{nodes: TreeNode<IVideo>[]}>()
);

export const RelatedVideoRequestFailed = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_FAILED,
    props<any>()
)

export const VideoTreeNodeSelected =  createAction(
    VIDEO_TREE_ACTIONS.VIDEO_NODE_SELECTED,
    props<any>()
)