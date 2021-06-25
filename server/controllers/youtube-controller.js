const {google} = require('googleapis');
const {TOKEN} = require('../config');
const youtube = google.youtube('v3');



async function searchRelatedVideo(id) {
	const videoInfo = await youtube.search.list({
		key: TOKEN,
		part: 'snippet',
		relatedToVideoId: id,
		type: 'video',
		maxResults: 5
	});
	
	const relatedVideoList = videoInfo.data.items.map(item => {
		try{
			return ({
					title: item.snippet.title, 
					previewLowRes: item.snippet.thumbnails.default.url,
					previewHighRes: item.snippet.thumbnails.standard.url,
					id: item.id.videoId
				})
		}catch(err) {
			return null;
		}
	}).filter(video => !!video);

	return {[id] : relatedVideoList}
}


async function getVideoInfo(req,res) {
	const { id } = req.body;
	if(!id) {
		res.status(422);
		return;
	}
	const videoData = await youtube.videos.list({
		key: TOKEN,
		part: 'snippet',
		type: 'contentDetails',
		id
	});
	const [videoItem] = videoData.data.items
	const video = {
		title: videoItem.snippet.title,
		id: videoItem.id,
		previewHighRes: videoItem.snippet.thumbnails.default.url,
		previewLowRes: videoItem.snippet.thumbnails.standard.url
	}
	console.log(videoItem); 
	res.status(200).json(video);
}

async function getRelatedVideos(req,res) {
	const { ids } = req.body;
	if(!ids) {
		res.status(422);
		return;
	}
	const listOfRelatedVideos = await Promise.all(
		ids.map(id => searchRelatedVideo(id))
	)
	const relatedVideoCollection =  listOfRelatedVideos.reduce((acc,item) => ({...acc, ...item}), {})
	res.status(200).json(relatedVideoCollection);
}

module.exports = {
	getVideoInfo,
	getRelatedVideos
}