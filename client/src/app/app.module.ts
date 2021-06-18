import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedModule } from '@shared/shared.module';
import { YouTubeApi } from '@services/youtube.service';
import { MainModule } from './core/pages/main/main.module';
import { FormsModule } from '@angular/forms';
import { VideoIdPipe } from './core/pipes/video-id.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MainModule,
  ],
  providers: [YouTubeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
