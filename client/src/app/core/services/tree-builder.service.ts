import { Injectable } from "@angular/core";
import { IRelatedVideosResponse, IVideo, LoadingStatus } from "@interfaces/related-video.interface";
import { TreeNode, Tree } from "../models/tree.model";

@Injectable({providedIn: 'root'})
export class TreeBuilderService {
	private tree: Tree;

	public initNewTree(node: IVideo) {
		const rootNode: TreeNode<IVideo> = {
            children: [],
            data: node,
            generation : 0,
            status : LoadingStatus.Loaded
        };
		rootNode.data = node;
		this.tree = new Tree(rootNode);
		return this.tree.root;
	}

	public addTreeNodes(relatedTreeNodes: IRelatedVideosResponse): TreeNode<IVideo>[] {
		let newTreeNodes: TreeNode<IVideo>[] = []
		for(let key in relatedTreeNodes){
			const rootTreeNode = this.tree.findBFS(key);
			if(!rootTreeNode){
				continue;
			}
			else{
				for(let video of relatedTreeNodes[key]){
					const node: TreeNode<IVideo> = {
						children: [],
						data: video,
						generation: 0,
						status: LoadingStatus.Loaded
					}
					const newTreeNode = this.tree.addTreeNode(node ,rootTreeNode)
					if(newTreeNode){
						newTreeNode.data = video;
						newTreeNodes.push(node);
					}
				}
			}
		}
		return newTreeNodes;
	}
};