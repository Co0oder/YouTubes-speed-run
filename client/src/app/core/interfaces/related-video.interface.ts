export interface IRelatedVideo{
	id: string;
	previewHighRes: string;
	previewLowRes: string;
	title: string
}

export interface IRelatedVideosResponse {
	[key: string]: IRelatedVideo[];
}