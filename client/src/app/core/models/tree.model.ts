export class Node {
    public generation: number = 0;
    public children: Node[] = [];

	constructor(public key: string) {}
}

export class Tree {
    public nodesList: Set<string> = new Set<string>();
    public depth: number = 0;
    constructor(public root : Node) {}

    public addNode(childKey: string, rootKey: string): void {
        const node = new Node(childKey);
        if(!this.nodesList.has(childKey)){
            this.nodesList.add(childKey)
            const parent = rootKey ? this.findBFS(rootKey) : null;

            if(parent){
                node.generation = parent.generation + 1;
                if(node.generation > this.depth) {
                    this.depth = node.generation;
                }
                parent.children.push(node);
            }
            else if(!this.root){
                this.root = node;
            }
            else {
                return;
            }
        }
    }
    
    public addNodes(nodesKeys: string[], rootKay: string): void {
        nodesKeys.forEach(nodeKey => {
            this.addNode(nodeKey, rootKay)
        });
    }

    public findBFS(key: string): Node | null {
        const queue: Node[] = [this.root];
        while(queue.length){
            const node = queue.shift();
            if(node && node.key === key){
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
