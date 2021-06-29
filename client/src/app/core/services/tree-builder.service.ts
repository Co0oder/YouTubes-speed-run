import { Injectable } from "@angular/core";
import { IRelatedVideosResponse, IVideo, LoadingStatus } from "@interfaces/related-video.interface";
import { ITreeNode, VideosTree } from "../models/tree.model";

@Injectable({providedIn: 'root'})
export class TreeBuilderService {

	private tree: VideosTree;

	public initNewTree(data: IVideo): ITreeNode<IVideo>[][]{
		const rootNode = this.treeNodeFactory(data);
		this.tree = new VideosTree();
		this.tree.addTreeNode(rootNode);
		return this.tree.NodeColection;
	}

	public addTreeNodes(videos: IRelatedVideosResponse): ITreeNode<IVideo>[][] {
		for(const rootId in videos){
			const rootNode = this.tree.findBFSById(rootId);
			if(!rootNode){
				continue;
			}
			videos[rootId].forEach(
				video => {
					const childNode = this.treeNodeFactory(video);
					this.tree.addTreeNode(childNode,rootNode);
				}
			)
		}
		return this.tree.NodeColection;
	}

	private treeNodeFactory(data: IVideo): ITreeNode<IVideo> {		
		return {
				children: [],
				data,
				generation : 0,
				status : LoadingStatus.Loaded
		};
	}
};