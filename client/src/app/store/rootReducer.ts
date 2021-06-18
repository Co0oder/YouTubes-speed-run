import { ActionReducerMap, MetaReducer } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as VideosTree from './videos-tree/reducer'
  
  export interface State {
	VideosTree: VideosTree.VideosTreeState
  }
  
  export const reducers: ActionReducerMap<State> = {
	VideosTree:  VideosTree.VideosTreeReducer
  };
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []; 