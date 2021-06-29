import { IVideo, LoadingStatus } from "@interfaces/related-video.interface";

export interface ITreeNode<T> {
    generation: number;
    rootPointer?: IPointer;
    pointer?: IPointer;
    children: IPointer[];
    data: T;
    status: LoadingStatus;
}
export interface IPointer {
    generation: number;
    index: number;
}

export abstract class Tree<T> {

    protected abstract depth: number;
    abstract get Depth(): number;

    protected abstract nodeColection: ITreeNode<T>[][];
    abstract get NodeColection(): ITreeNode<T>[][];

    abstract addTreeNode(child: ITreeNode<T>, root: ITreeNode<T>): void;

    abstract traverseBFS(cb: (val: any) => void): void;
}


export class VideosTree extends Tree<IVideo>{

    protected depth: number;
   
    public get Depth(): number {
        return this.depth;
    }

    protected nodeColection: ITreeNode<IVideo>[][] = [[]];

    private usedVideoIds: string[] = [];

    public get NodeColection (): ITreeNode<IVideo>[][] {
        return this.nodeColection;
    }


    private isNodeInTree(node: ITreeNode<IVideo>): boolean {
        return this.usedVideoIds.includes(node.data.id);
    }

    public addTreeNode(child: ITreeNode<IVideo>, root?: ITreeNode<IVideo>): void {
		if(this.isNodeInTree(child)){
            return;
        }
        this.nodeColection = JSON.parse(JSON.stringify(this.nodeColection));
        this.usedVideoIds.push(child.data.id);
        const parent = root ? this.findBFS(root) : null;
        if(parent){
            const generation = parent.generation + 1;
            child.generation = generation;
            if(!this.nodeColection[generation]) {
                this.nodeColection.push([]);
            }
            if(generation > this.depth) {
                this.depth = generation;
            }
            const numberOfGenerationExemplars = this.NodeColection[generation].push(child);
            const pointer: IPointer = {
                generation,
                index: numberOfGenerationExemplars - 1,
            }
            child.pointer = pointer;
            child.rootPointer = parent.pointer;
            parent.children = [...parent.children];
            parent.children.push(pointer);
        }
        else if(!this.nodeColection[0][0]){
            child.pointer = {generation: 0, index: 0}
            this.nodeColection = [[child]]
        }
        else {
            return;
        }
	}

    public traverseBFS(cb: (val: any) => void): void {
        const queue = [this.nodeColection[0][0]];
		if(cb) {
			while(queue.length){
				const node = queue.shift();
				cb(node);
				if(node){
                    const children = node.children.map(
                        child => this.nodeColection[child.generation][child.index]
                    );
                    for(const child  of children) {
                        queue.push(child);
                    }
                }
			}
		}
    }

    public findBFS(targetNode: ITreeNode<IVideo>): ITreeNode<IVideo> | null {
        const queue = [this.nodeColection[0][0]];
		while(queue.length){
			const node = queue.shift();
			if(targetNode.data.id === node?.data.id){
				return node
			}
			if(node){
                const children = node.children.map(
                    child => this.nodeColection[child.generation][child.index]
                );
                for(const child  of children) {
                    queue.push(child);
                }
            }
		}
		return null;
    }

    public findBFSById(id: string): ITreeNode<IVideo> | null {
        const queue = [this.nodeColection[0][0]];
		while(queue.length){
			const node = queue.shift();
			if(id === node?.data.id){
				return node
			}
			if(node){
                const children = node.children.map(
                    child => this.nodeColection[child.generation][child.index]
                );
                for(const child  of children) {
                    queue.push(child);
                }
            }
		}
		return null;
    }

}
