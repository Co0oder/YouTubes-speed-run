import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'videoId'})
export class VideoIdPipe implements PipeTransform{
    transform(value: string): string {
        const  ids = value.match(/[a-z0-9_-]{11}/gi);
        const [id] = ids ? ids : ''
        return id;
    }
}