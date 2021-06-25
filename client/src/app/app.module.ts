import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/rootReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedModule } from '@shared/shared.module';
import { YouTubeApi } from '@services/youtube.service';
import { MainModule } from './core/pages/main/main.module';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { VideosTreeEffects } from '@store/videos-tree/effects';
import { TreeBuilderService } from '@services/tree-builder.service';
import { SearchWordService } from '@services/serch-word.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([VideosTreeEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MainModule,
  ],
  providers: [YouTubeApi, TreeBuilderService, SearchWordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
