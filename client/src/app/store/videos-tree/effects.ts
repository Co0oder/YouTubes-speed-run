import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TreeBuilderService } from '@services/tree-builder.service';
import { YouTubeApi } from '@services/youtube.service';
import {State} from '@store/rootReducer';
import { map, switchMap} from 'rxjs/operators';
import { RelatedVideoRequestSucceed, RequestRelatedVideo } from './actions';

@Injectable()
export class VideosTreeEffects {

	constructor(
		private actions$: Actions,
		private youTuneService: YouTubeApi,
		private treeBuilder: TreeBuilderService,
		private store: Store<State>,
	) {}
	public LoadRelatedVideos$ = createEffect(() => 
		this.actions$.pipe(
			ofType(RequestRelatedVideo),
			switchMap((props) =>{
				console.log(props);
				return this.youTuneService.getRelatedVideo(props.ids)
					.pipe(map((res) => {
						const nodesList = this.treeBuilder.addNodes(res);
						return RelatedVideoRequestSucceed({payload: nodesList})}))
			}
			)
		)
	)
}