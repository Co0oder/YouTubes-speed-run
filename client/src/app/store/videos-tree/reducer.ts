import { Action, createReducer, on } from '@ngrx/store';
import * as VideosTreeActions from './actions';

export enum VideosTreeStoreFields {
    NodesList = 'nodesList',
    CheckedVideos = 'CheckedVideos',
    NodesListLoadingStatus = 'NodesListLoadingStatus',
    CurrentNodePointer = 'currentNodePointer',
}

export interface VideosTreeState {
    [VideosTreeStoreFields.NodesList] : Node[];
    [VideosTreeStoreFields.CheckedVideos]: string[];
    [VideosTreeStoreFields.NodesListLoadingStatus]: boolean;
    [VideosTreeStoreFields.CurrentNodePointer]: Node | null;
}

export const initialVideosTreeState: VideosTreeState = {
    [VideosTreeStoreFields.NodesList] : [],
    [VideosTreeStoreFields.CheckedVideos]: [],
    [VideosTreeStoreFields.NodesListLoadingStatus]: false,
    [VideosTreeStoreFields.CurrentNodePointer]: null
}

export const VideosTreeReducer = createReducer<VideosTreeState, Action>(
    initialVideosTreeState,
    on(
        VideosTreeActions.RequestRelatedVideo, 
        (state) => ({
            ...state,
            [VideosTreeStoreFields.NodesListLoadingStatus]: true 
        })
    ),
    on(
        VideosTreeActions.RelatedVideoRequestSucceed, 
        (state, {payload} : any) => {
            console.log('result ', payload)
            const nodes = payload;
            const updatedNodesList = [
                ...state[VideosTreeStoreFields.NodesList],
                ...payload,
            ];
            return { 
                ...state,
                [VideosTreeStoreFields.NodesListLoadingStatus]: false,
                [VideosTreeStoreFields.NodesList]: updatedNodesList,
            };
        }
    ),
)

export function reducer(state: VideosTreeState, action: Action) : any{ 
    return VideosTreeReducer(state, action);
}