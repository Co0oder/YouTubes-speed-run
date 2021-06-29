import { IVideo, LoadingStatus } from "@interfaces/related-video.interface";
import { ITreeNode, VideosTree } from "src/app/core/models/tree.model";

const mockVideos: IVideo[] = [
    {id: '1', previewHighRes: 'img', previewLowRes: 'img', title: 'title1'},
    {id: '2', previewHighRes: 'img', previewLowRes: 'img', title: 'title2'},
    {id: '3', previewHighRes: 'img', previewLowRes: 'img', title: 'title3'},
    {id: '4', previewHighRes: 'img', previewLowRes: 'img', title: 'title4'},
    {id: '5', previewHighRes: 'img', previewLowRes: 'img', title: 'title5'},
    {id: '6', previewHighRes: 'img', previewLowRes: 'img', title: 'title6'},
    {id: '7', previewHighRes: 'img', previewLowRes: 'img', title: 'title7'},
    {id: '8', previewHighRes: 'img', previewLowRes: 'img', title: 'title8'},
    {id: '9', previewHighRes: 'img', previewLowRes: 'img', title: 'title9'},
    {id: '10', previewHighRes: 'img', previewLowRes: 'img', title: 'title10'},
    {id: '11', previewHighRes: 'img', previewLowRes: 'img', title: 'title11'},
    {id: '12', previewHighRes: 'img', previewLowRes: 'img', title: 'title12'},
    {id: '13', previewHighRes: 'img', previewLowRes: 'img', title: 'title13'},
]

function fabric(data: IVideo, generation: number): ITreeNode<IVideo> {
    return {
        generation,
        children : [],
        status: LoadingStatus.Loaded,
        data,
    }
}

const mockTree: VideosTree = new VideosTree();

mockTree.addTreeNode(fabric(mockVideos[0],0));

mockTree.addTreeNode(fabric(mockVideos[1],1),fabric(mockVideos[0],0));
mockTree.addTreeNode(fabric(mockVideos[2],1),fabric(mockVideos[0],0));
mockTree.addTreeNode(fabric(mockVideos[3],1),fabric(mockVideos[0],0));

mockTree.addTreeNode(fabric(mockVideos[4],2),fabric(mockVideos[1],1));
mockTree.addTreeNode(fabric(mockVideos[5],2),fabric(mockVideos[1],1));
mockTree.addTreeNode(fabric(mockVideos[6],2),fabric(mockVideos[1],1));
mockTree.addTreeNode(fabric(mockVideos[7],2),fabric(mockVideos[2],1));
mockTree.addTreeNode(fabric(mockVideos[8],2),fabric(mockVideos[2],1));
mockTree.addTreeNode(fabric(mockVideos[9],2),fabric(mockVideos[2],1));
mockTree.addTreeNode(fabric(mockVideos[10],2),fabric(mockVideos[3],1));
mockTree.addTreeNode(fabric(mockVideos[11],2),fabric(mockVideos[3],1));
mockTree.addTreeNode(fabric(mockVideos[12],2),fabric(mockVideos[3],1));


export const NodeColection = mockTree.NodeColection