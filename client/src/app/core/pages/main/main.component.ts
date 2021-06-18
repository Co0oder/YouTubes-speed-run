import { Component, OnInit } from '@angular/core';
import { IRelatedVideo, IRelatedVideosResponse } from '@interfaces/related-video.interface';
import { YouTubeApi } from '@services/youtube.service';
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
    private youtube: YouTubeApi,
    private videoId: VideoIdPipe
  ) { }
  

  public search(params: ISearchParams): void {
    const id = this.videoId.transform(params.link);
    this.youtube.getRelatedVideo([id]).subscribe(res => {
      this.relatedVideosIds = Object.keys(res);
      this.relatedVideos = res;
      console.log()
    })
  }

}
