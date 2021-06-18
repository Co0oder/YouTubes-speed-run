import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() paramsApplayed = new EventEmitter<ISearchParams>();
  
  constructor() { }

  public applay(): void {
    this.paramsApplayed.emit({
      link: this.link,
      searchWord: this.stopWord
    })
  }
}
