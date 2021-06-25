import { Component, Input } from '@angular/core';
import { IVideo, LoadingStatus } from '@interfaces/related-video.interface';
import { Store } from '@ngrx/store';
import { State } from '@store/rootReducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos-collection',
  templateUrl: './videos-collection.component.html',
  styleUrls: ['./videos-collection.component.scss']
})
export class VideosCollectionComponent{
  @Input() video$: Observable<IVideo[]>;
  constructor(private store: Store<State>,) {
    console.log(LoadingStatus.Empty);
    // this.videos$ = this.store.select();
  }
}
