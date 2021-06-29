import { Component, Input } from '@angular/core';
import { IVideo, LoadingStatus } from '@interfaces/related-video.interface';
import { Store } from '@ngrx/store';
import { State } from '@store/rootReducer';
import { ChangePointer } from '@store/videos-tree/actions';
import { getCurrentPointer, getVideosByPointer } from '@store/videos-tree/selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPointer, ITreeNode } from 'src/app/core/models/tree.model';

@Component({
  selector: 'app-videos-collection',
  templateUrl: './videos-collection.component.html',
  styleUrls: ['./videos-collection.component.scss']
})
export class VideosCollectionComponent{
  public videos: ITreeNode<IVideo>[] = [];
  constructor(private store: Store<State>,) {
    this.store.select(getCurrentPointer)
    .subscribe(
      pointer => {
        this.store.select(getVideosByPointer(pointer))
        .subscribe(
          videoNodes => {
            this.videos = videoNodes
        });
    });
  }

  public changePointer(pointer?: IPointer): void {
    console.log(this.videos, pointer);
    if(pointer){
      this.store.dispatch(ChangePointer({pointer}));
    }

  }
}
