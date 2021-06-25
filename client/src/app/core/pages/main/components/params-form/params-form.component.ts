import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VideoIdPipe } from 'src/app/core/pipes/video-id.pipe';
import { ISearchParams } from '../../main.interface';

@Component({
  selector: 'app-params-form',
  templateUrl: './params-form.component.html',
  styleUrls: ['./params-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamsFormComponent {
  public link = '';
  public stopWord = '';

  @Output() paramsAppalled = new EventEmitter<ISearchParams>();
  
  constructor(private videoId: VideoIdPipe) { }

  public apply(): void {
    const id = this.videoId.transform(this.link);
    this.paramsAppalled.emit({
      id,
      searchWord: this.stopWord
    })
  }
}
