import { Injectable } from "@angular/core";
import { IRelatedVideosResponse } from "@interfaces/related-video.interface";
import { apiRoutes } from "@constants/api-routes.constants";
import { ApiService } from "@shared/services/api.service";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable()
export class YouTubeApi{
	constructor(private api: ApiService) {}
	public getRelatedVideo(ids:  string[]): Observable<IRelatedVideosResponse> {
		return this.api.post<IRelatedVideosResponse,{ids: string[]}>(apiRoutes.relatedVideo, {ids})
			.pipe(take(1));
	}
}