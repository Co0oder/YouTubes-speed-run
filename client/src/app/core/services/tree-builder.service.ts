import { Injectable } from "@angular/core";
import { IRelatedVideosResponse } from "@interfaces/related-video.interface";
import { Node, Tree } from "../models/tree.model";

@Injectable({providedIn: 'root'})
export class TreeBuilderService {
	private tree: Tree;

	public initNewTree(key: string): Node[] {
		const rootNode = new Node(key);
		this.tree = new Tree(rootNode);
		return [this.tree.root];
	}

	public addNodes(relatedNodes: IRelatedVideosResponse): Node[] {
		let newNodes: Node[] = []
		for(let key in relatedNodes){
			const rootNode = this.tree.findBFS(key);
			if(!rootNode){
				continue;
			}
			else{
				for(let video of relatedNodes[key]){
					const newNode = this.tree.addNode(video.id ,rootNode.key)
					if(newNode){
						newNode.data = video;
						newNodes.push(newNode);
					}
				}
			}
		}
		return newNodes;
	}
};