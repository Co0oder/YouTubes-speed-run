import { Action, createReducer, on } from '@ngrx/store';
import * as VideosTreeActions from './actions';

export enum VideosTreeStoreFields {
    NodesList = 'nodesList',
    SearchWord = 'searchWord',
    CheckedVideos = 'CheckedVideos',
    NodesListLoadingStatus = 'NodesListLoadingStatus',
    CurrentNodePointer = 'currentNodePointer',
}

export interface VideosTreeState {
    [VideosTreeStoreFields.NodesList] : Node[];
    [VideosTreeStoreFields.CheckedVideos]: string[];
    [VideosTreeStoreFields.SearchWord]: string;
    [VideosTreeStoreFields.NodesListLoadingStatus]: boolean;
    [VideosTreeStoreFields.CurrentNodePointer]: Node | null;
}

export const initialVideosTreeState: VideosTreeState = {
    [VideosTreeStoreFields.NodesList] : [],
    [VideosTreeStoreFields.CheckedVideos]: [],
    [VideosTreeStoreFields.NodesListLoadingStatus]: false,
    [VideosTreeStoreFields.CurrentNodePointer]: null,
    [VideosTreeStoreFields.SearchWord]: ''
}

export const VideosTreeReducer = createReducer<VideosTreeState, Action>(
    initialVideosTreeState,
    on(
        VideosTreeActions.RequestRelatedVideo, 
        (state, payload) => {
            return {
                ...state,
                [VideosTreeStoreFields.NodesListLoadingStatus]: true,
                ...(payload.searchWord ? {[VideosTreeStoreFields.SearchWord] : payload.searchWord} : {}) 
            }
        }
    ),
    on(
        VideosTreeActions.RelatedVideoRequestSucceed, 
        (state, {payload} : any) => {
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