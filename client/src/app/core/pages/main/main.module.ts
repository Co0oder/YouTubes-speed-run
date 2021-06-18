import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { VideosCollectionComponent } from './components/videos-collection/videos-collection.component';
import { FormsModule } from '@angular/forms';
import { VideoIdPipe } from '../../pipes/video-id.pipe';
import { ParamsFormComponent } from './components/params-form/params-form.component';

@NgModule({
  declarations: [
    MainComponent,
    VideosCollectionComponent,
    ParamsFormComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [VideoIdPipe]
})
export class MainModule { }
