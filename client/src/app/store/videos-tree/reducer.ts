import { IVideo } from '@interfaces/related-video.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { IPointer, ITreeNode, VideosTree } from 'src/app/core/models/tree.model';
import * as VideosTreeActions from './actions';
import { NodeColection } from './mock';

export enum VideosTreeStoreFields {
    TreeNodesList = 'nodesList',
    SearchWord = 'searchWord',
    CurrentPointer = 'currentPointer',
    TargetPointer = 'targetPointer'
}

export interface VideosTreeState {
    [VideosTreeStoreFields.TreeNodesList] : ITreeNode<IVideo>[][];
    [VideosTreeStoreFields.SearchWord]: string;
    [VideosTreeStoreFields.CurrentPointer]: IPointer;
    [VideosTreeStoreFields.TargetPointer]: IPointer | null;
}

export const initialVideosTreeState: VideosTreeState = {
    [VideosTreeStoreFields.TreeNodesList] : NodeColection,
    [VideosTreeStoreFields.CurrentPointer]: {generation: 0, index: 0},
    [VideosTreeStoreFields.TargetPointer]: null,
    [VideosTreeStoreFields.SearchWord]: ''
}

export const VideosTreeReducer = createReducer<VideosTreeState, Action>(
    initialVideosTreeState,
    on(
        VideosTreeActions.SearchFinished, 
        (state, payload) => {
            return { 
                ...state,
                [VideosTreeStoreFields.TargetPointer]: state[VideosTreeStoreFields.CurrentPointer]
            };
        }
    ),
    on(
        VideosTreeActions.StartSearchSucceed, 
        (state, payload) => {
            return { 
                ...state,
                [VideosTreeStoreFields.TreeNodesList]: JSON.parse(JSON.stringify(payload.nodesList))
            };
        }
    ),
    on(
        VideosTreeActions.RelatedVideoRequestSucceed, 
        (state, payload) => ({ 
            ...state,
            [VideosTreeStoreFields.TreeNodesList]: JSON.parse(JSON.stringify(payload.nodes))
        })
    ),
    on(
        VideosTreeActions.ChangePointer,
        (state,payload) => ({
            ...state,
            [VideosTreeStoreFields.CurrentPointer]: payload.pointer
        })
    )
)

export function reducer(state: VideosTreeState, action: Action) : any{ 
    return VideosTreeReducer(state, action);
}