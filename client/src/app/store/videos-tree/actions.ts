import { Injectable } from "@angular/core";
import { IRelatedVideosResponse } from "@interfaces/related-video.interface";
import {createAction, props} from '@ngrx/store';
import { ISearchParams } from "src/app/core/pages/main/main.interface";

const VIDEO_TREE_ACTIONS = {
	RELATED_VIDEOS_REQUESTED: '[VIDEO_TREE] Related Video Requested',
    RELATED_VIDEOS_SUCCESS: '[VIDEO_TREE] Related Video Success',
    RELATED_VIDEOS_FAILED: '[VIDEO_TREE] Related Video Failed',
    VIDEO_NODE_SELECTED: '[VIDEO_TREE] Video Node Selected'
}

export const RequestRelatedVideo = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_REQUESTED,
    props<ISearchParams>()
);

export const ReletedVideoRequestSucced = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_SUCCESS,
    props<IRelatedVideosResponse>()
);

export const RelatedVideoRequestFailed = createAction(
    VIDEO_TREE_ACTIONS.RELATED_VIDEOS_FAILED,
    props<any>()
)

export const VideoNodeSelected =  createAction(
    VIDEO_TREE_ACTIONS.VIDEO_NODE_SELECTED,
    props<any>()
)