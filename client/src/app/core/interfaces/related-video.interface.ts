export interface RelatedVideo{
	id: string;
	preview: string;
	title: string
}

export interface IRelatedVideosResponse {
	[key: string]: RelatedVideo[];
}