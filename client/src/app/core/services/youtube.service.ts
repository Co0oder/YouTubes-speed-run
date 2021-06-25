import { Injectable } from "@angular/core";
import { IRelatedVideosResponse, IVideo } from "@interfaces/related-video.interface";
import { apiRoutes } from "@constants/api-routes.constants";
import { ApiService } from "@shared/services/api.service";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable()
export class YouTubeApi{
	constructor(private api: ApiService) {}
	public getRelatedVideos(ids:  string[]): Observable<IRelatedVideosResponse> {
		return this.api.post<IRelatedVideosResponse,{ids: string[]}>(apiRoutes.relatedVideos, {ids})
			.pipe(take(1));
	}
	public getVideoInfo(id:  string): Observable<IVideo> {
		return this.api.post<IVideo,{id: string}>(apiRoutes.videoInfo, {id})
			.pipe(take(1));
	}
}