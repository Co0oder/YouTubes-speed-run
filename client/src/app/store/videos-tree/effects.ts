import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SearchWordService } from '@services/serch-word.service';
import { TreeBuilderService } from '@services/tree-builder.service';
import { YouTubeApi } from '@services/youtube.service';
import {State} from '@store/rootReducer';
import { from, of } from 'rxjs';
import { map, switchMap, withLatestFrom} from 'rxjs/operators';
import { RelatedVideoRequestSucceed, RequestRelatedVideo, SearchFinished, StartSearch, StartSearchSucceed } from './actions';
import { getSearchWord } from './selectors';

@Injectable()
export class VideosTreeEffects {
	private step = 0;

	constructor(
		private actions$: Actions,
		private youTubeService: YouTubeApi,
		private treeBuilder: TreeBuilderService,
		private store: Store<State>,
		private searchWord: SearchWordService
	) {}
	public LoadRelatedVideos$ = createEffect(() => 
		this.actions$.pipe(
			ofType(RequestRelatedVideo),
			withLatestFrom(this.store.select(getSearchWord)),
			switchMap(([props, searchWord]) => 
				this.youTubeService.getRelatedVideos(props.ids)
					.pipe(map((res) => {
						const StopWordVideoKey = this.searchWord.isWordInList(res, searchWord);
						const ids = Object.keys(res).reduce(
							(acc: string[], key: string) => [...acc, ...res[key].map(video => video.id)], 
							[]
						)
						const nodesList = this.treeBuilder.addTreeNodes(res);
						if (!StopWordVideoKey) {
							this.store.dispatch(RequestRelatedVideo({ids}));
						}
						return  RelatedVideoRequestSucceed({nodes: nodesList});
					})
				)
			)
		)
	)

	public StartSearching$ = createEffect(() => 
		this.actions$.pipe(
			ofType(StartSearch),
			switchMap((props) => 
				this.youTubeService.getVideoInfo(props.id).pipe(
					switchMap((res) => {
						const node = this.treeBuilder.initNewTree(res);
						const StopWordVideoKey =  res.title.toLocaleLowerCase()
							.includes(props.searchWord.toLocaleLowerCase()) ? res.id : null;
						if (StopWordVideoKey) {
							return [SearchFinished({node})];
						}
						return  [
							StartSearchSucceed({node}),
							RequestRelatedVideo({ids: [res.id]})
						];
					})
				)	
			)
		)
	)
}
