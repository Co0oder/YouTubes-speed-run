export enum LoadingStatus{
	Loading,
	Loaded,
	Empty,
	Errored
}
export interface IVideo{
	id: string;
	previewHighRes: string;
	previewLowRes: string;
	title: string
}

export interface IRelatedVideosResponse {
	[key: string]: IVideo[];
}
