import { Action, createReducer, on } from '@ngrx/store';
import * as VideosTreeActions from './actions';

export enum VideosTreeStoreFeelds {
    NodesList = 'nodesList',
    CheckedVideos = 'CheckedVideos',
    NodesListLoadingStatus = 'NodesListLoadingStatus',
    CurrentNodePointer = 'currentNodePointer',
}

export interface VideosTreeState {
    [VideosTreeStoreFeelds.NodesList] : Node[];
    [VideosTreeStoreFeelds.CheckedVideos]: string[];
    [VideosTreeStoreFeelds.NodesListLoadingStatus]: boolean;
    [VideosTreeStoreFeelds.CurrentNodePointer]: Node | null;
}

export const initialVideosTreeState: VideosTreeState = {
    [VideosTreeStoreFeelds.NodesList] : [],
    [VideosTreeStoreFeelds.CheckedVideos]: [],
    [VideosTreeStoreFeelds.NodesListLoadingStatus]: false,
    [VideosTreeStoreFeelds.CurrentNodePointer]: null
}

const VideosTreeReducer = createReducer(
    initialVideosTreeState,
    on(
        VideosTreeActions.RequestRelatedVideo, 
        (state) => ({
            ...state,
            [VideosTreeStoreFeelds.NodesListLoadingStatus]: true 
        })
    ),
    on(
        VideosTreeActions.ReletedVideoRequestSucced, 
        (state, {payload}) => {
            console.log(payload)
            return { 
                ...state,
                [VideosTreeStoreFeelds.NodesListLoadingStatus]: false 
            };
        }
    ),
)

export function reducer(state: VideosTreeState | undefined, action: Action) { 
    return VideosTreeReducer(state, action);
}