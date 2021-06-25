import { IVideo } from '@interfaces/related-video.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { IPointer, TreeNode } from 'src/app/core/models/tree.model';
import * as VideosTreeActions from './actions';

export enum VideosTreeStoreFields {
    TreeNodesList = 'nodesList',
    SearchWord = 'searchWord',
    CurrentPointer = 'currentPointer',
    TargetPointer = 'targetPointer'
}

export interface VideosTreeState {
    [VideosTreeStoreFields.TreeNodesList] : TreeNode<IVideo>[][];
    [VideosTreeStoreFields.SearchWord]: string;
    [VideosTreeStoreFields.CurrentPointer]: IPointer;
    [VideosTreeStoreFields.TargetPointer]: IPointer | null;
}

export const initialVideosTreeState: VideosTreeState = {
    [VideosTreeStoreFields.TreeNodesList] : [[]],
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
                [VideosTreeStoreFields.TreeNodesList]: [[payload.node]]
            };
        }
    ),
    on(
        VideosTreeActions.RelatedVideoRequestSucceed, 
        (state, payload) => {
            let nodesList = state[VideosTreeStoreFields.TreeNodesList];
            let newGeneration = nodesList.pop() || []; 
            console.log(payload.nodes)
            newGeneration = [...newGeneration, ...payload.nodes];
            nodesList.push(newGeneration);
            return { 
                ...state,
                [VideosTreeStoreFields.TreeNodesList]: nodesList
            };
        }
    ),
)

export function reducer(state: VideosTreeState, action: Action) : any{ 
    return VideosTreeReducer(state, action);
}