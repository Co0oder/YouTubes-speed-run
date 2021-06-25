import { Component, OnInit } from '@angular/core';
import { IVideo, IRelatedVideosResponse } from '@interfaces/related-video.interface';
import { Store } from '@ngrx/store';
import { TreeBuilderService } from '@services/tree-builder.service';
import { YouTubeApi } from '@services/youtube.service';
import { RequestRelatedVideo, StartSearch } from '@store/videos-tree/actions';
import { getVideosTreeList } from '@store/videos-tree/selectors';
import { VideoIdPipe } from '../../pipes/video-id.pipe';
import { ISearchParams } from './main.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  public relatedVideosIds: string[] = [];
  public relatedVideos: IRelatedVideosResponse = {};
  constructor(
    private youTube: YouTubeApi,
    private videoId: VideoIdPipe,
    private store: Store,
    private treeBuilder: TreeBuilderService
  ) {
    this.store.select(getVideosTreeList).subscribe(res => console.log(res));
   }
  

  public search(params: ISearchParams): void {
    this.store.dispatch(StartSearch(params))
  }

}
