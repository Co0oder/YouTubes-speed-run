import { Injectable } from "@angular/core";
import { IRelatedVideosResponse } from "@interfaces/related-video.interface";

@Injectable({providedIn: 'root'})
export class SearchWordService{
    constructor(){}

    isWordInList(relatedVideos: IRelatedVideosResponse, searchWord: string): string | null {
        for(let key in relatedVideos) {
            for(let video of relatedVideos[key]){
                const isWordInTitle = video.title.toLowerCase().includes(searchWord.toLowerCase());
                if(isWordInTitle) {
                    return video.id;
                }
            }
        }
        return null;
    }
}