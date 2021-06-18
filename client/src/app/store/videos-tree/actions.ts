import { IRelatedVideosResponse } from "@interfaces/related-video.interface";
import {createAction, props} from '@ngrx/store';
import { Node } from "src/app/core/models/tree.model";
import { ISearchParams } from "src/app/core/pages/main/main.interface";


const VIDEO_TREE_ACTIONS = {
	RELATED_VIDEOS_REQUESTED: `[VIDEOS_TREE] Related Video Requested`,
    RELATED_VIDEOS_SUCCESS: `[VIDEOS_TREE] Related Video Success`,
    RELATED_VIDEOS_FAILED: `[VIDEOS_TREE] Related Video Failed`,
    VIDEO_NODE_SELECTED: `[VIDEOS_TREE] Video Node Selected`
}

export const RequestRelatedVideo = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_REQUESTED,
    props<ISearchParams>()
);

export const RelatedVideoRequestSucceed = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_SUCCESS,
    props<{payload: Node[]}>()
);

export const RelatedVideoRequestFailed = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_FAILED,
    props<any>()
)

export const VideoNodeSelected =  createAction(
    VIDEO_TREE_ACTIONS.VIDEO_NODE_SELECTED,
    props<any>()
)