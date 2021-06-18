import { Component, Input } from '@angular/core';
import { IRelatedVideo, IRelatedVideosResponse } from '@interfaces/related-video.interface';

@Component({
  selector: 'app-videos-collection',
  templateUrl: './videos-collection.component.html',
  styleUrls: ['./videos-collection.component.scss']
})
export class VideosCollectionComponent{
  @Input() videos: IRelatedVideo[] = [
    {
      "title": "Байкпекінг спорядження 2020 Відгук після 1000км: Apidura, Brooks, Blackburn, одяг: синтетика/меринос",
      "previewLowRes": "https://i.ytimg.com/vi/liO5zJnFU-k/default.jpg",
      "previewHighRes": "https://i.ytimg.com/vi/liO5zJnFU-k/sddefault.jpg",
      "id": "liO5zJnFU-k"
  },
  {
      "title": "Байкпекінг велоподорож Україною. Гора Пивиха - найкрасивіше місце за весь тріп! Кременчук. Ep.6",
      "previewLowRes": "https://i.ytimg.com/vi/t0mXHhUVjt4/default.jpg",
      "previewHighRes": "https://i.ytimg.com/vi/t0mXHhUVjt4/sddefault.jpg",
      "id": "t0mXHhUVjt4"
  },
  {
      "title": "Байкпекінг велоподорож Україною. Зміна маршруту, 2 палаци - Сокиринці та Качанівка. Ep.2",
      "previewLowRes": "https://i.ytimg.com/vi/skafmHUkXoU/default.jpg",
      "previewHighRes": "https://i.ytimg.com/vi/skafmHUkXoU/sddefault.jpg",
      "id": "skafmHUkXoU"
  },
  {
      "title": "Байкпекінг велоподорож Україною. Ночівля під парканом. Драбів. Старовинна дерев'яна церква. Ep.4",
      "previewLowRes": "https://i.ytimg.com/vi/-MsAbEkThyk/default.jpg",
      "previewHighRes": "https://i.ytimg.com/vi/-MsAbEkThyk/sddefault.jpg",
      "id": "-MsAbEkThyk"
  },
  
  ];
  constructor() {
    this.videos = [
      ...this.videos,
      ...this.videos,
      ...this.videos,
      ...this.videos,
      ...this.videos,
      ...this.videos,
      ...this.videos,
      ...this.videos,
      ...this.videos,
      ...this.videos,
      {
        "title": "В гості до коників. Битиця. Халепа при запарюванні борщу James Cook. Велоблог",
        "previewLowRes": "https://i.ytimg.com/vi/q8RB1WQ6W9I/default.jpg",
        "previewHighRes": "https://i.ytimg.com/vi/q8RB1WQ6W9I/sddefault.jpg",
        "id": "q8RB1WQ6W9I"
    }
    ]
  }
}
