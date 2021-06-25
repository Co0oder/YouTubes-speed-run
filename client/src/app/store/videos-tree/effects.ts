import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SearchWordService } from '@services/serch-word.service';
import { TreeBuilderService } from '@services/tree-builder.service';
import { YouTubeApi } from '@services/youtube.service';
import {State} from '@store/rootReducer';
import { from, of } from 'rxjs';
import { map, switchMap, withLatestFrom} from 'rxjs/operators';
import { RelatedVideoRequestSucceed, RequestRelatedVideo } from './actions';
import { getSearchWord } from './selectors';

@Injectable()
export class VideosTreeEffects {
	private step = 0;

	constructor(
		private actions$: Actions,
		private youTuneService: YouTubeApi,
		private treeBuilder: TreeBuilderService,
		private store: Store<State>,
		private searchWord: SearchWordService
	) {}
	public LoadRelatedVideos$ = createEffect(() => 
		this.actions$.pipe(
			ofType(RequestRelatedVideo),
			withLatestFrom(this.store.select(getSearchWord)),
			switchMap(([props, searchWord]) => {
				return this.youTuneService.getRelatedVideo(props.ids)
					.pipe(map((res) => {
						console.log(`step: ${this.step}`, res);
						const StopWordVideoKey = this.searchWord.isWordInList(res, searchWord);
						const ids = Object.keys(res).reduce(
							(acc: string[], key: string) => [...acc, ...res[key].map(video => video.id)], 
							[]
						)
						const nodesList = this.treeBuilder.addNodes(res);
						if (!StopWordVideoKey) {
							this.store.dispatch(RequestRelatedVideo({ids}));
						}
						return  RelatedVideoRequestSucceed({payload: nodesList})
					})
				)}
			)
		)
	)
}