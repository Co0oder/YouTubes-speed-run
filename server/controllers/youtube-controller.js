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

	const relatedVideoList = await videoInfo.data.items.map(item => ({
		title: item.snippet.title, 
		preview: item.snippet.thumbnails.default.url,
		id: item.id.videoId
	}));
	return {[id] : relatedVideoList}
}

async function getVideoInfo(req,res) {
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
}