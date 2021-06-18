import { Pipe, PipeTransform } from "@angular/core";
import { IRelatedVideo, IRelatedVideosResponse } from "@interfaces/related-video.interface";

@Pipe({name: 'mapToIterable'})
export class MapToIterablePipe implements PipeTransform{
    transform(value: IRelatedVideosResponse): IRelatedVideo[] {
        return [];
    }
}