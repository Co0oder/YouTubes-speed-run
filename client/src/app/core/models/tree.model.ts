import { IVideo, LoadingStatus } from "@interfaces/related-video.interface";

export interface TreeNode<T> {
    generation: number;
    children: Array<TreeNode<T>>;
    data: T;
    status: LoadingStatus | null;
}
export interface IPointer {
    generation: number;
    index: number;
}
export class Tree{
    public nodesList: Set<string> = new Set<string>();
    public depth: number = 0;
    constructor(public root : TreeNode<IVideo>) {}

    public addTreeNode(child: TreeNode<IVideo>, root: TreeNode<IVideo>): TreeNode<IVideo> | null {
        if(this.nodesList.has(child.data?.id)){
            return null;
        }
        else{
            this.nodesList.add(child.data?.id)
            const parent = root ? this.findBFS(root.data?.id) : null;

            if(parent){
                child.generation = parent.generation + 1;
                if(child.generation > this.depth) {
                    this.depth = child.generation;
                }
                parent.children.push(child);
                return child;
            }
            else if(!this.root){
                this.root = child;
                return child;
            }
            else {
                return null;
            }
        }
    }
    
    public addTreeNodes(nodes: TreeNode<IVideo>[], root: TreeNode<IVideo>): void {
        nodes.forEach(node => {
            this.addTreeNode(node, root)
        });
    }

    public findBFS(key: string): TreeNode<IVideo> | null {
        const queue: TreeNode<IVideo>[] = [this.root];
        while(queue.length){
            const node = queue.shift();
            if(node && node.data.id === key){
                return node
            }
            if(node){
                for(const child  of node.children) {
                    queue.push(child);
                }
            }
        }
        return null;
    }

    public traverseBFS(cb: (val: any) => any): void {
        const queue = [this.root];
        if(cb) {
            while(queue.length){
                const node = queue.shift();
                cb(node);
                if(node){
                    for(const child  of node.children) {
                        queue.push(child);
                    }
                }
            }
        }
    }
}
