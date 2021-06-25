let mockVideos = require('./mock.json');
let testVidosNumber = 5;

async function getVideoInfo(req,res) {
	const { ids } = req.body;
	if(!ids) {
		res.status(422);
		return;
	}
	
    const relatedVideoCollection = {}
    ids.map(id => {
        const partOfVideos = mockVideos.splice(mockVideos.length - testVidosNumber, testVidosNumber);
        mockVideos = [...partOfVideos, ...mockVideos];
        partOfVideos.forEach(video =>{
            relatedVideos = {
                ...relatedVideos,
                [id] : partOfVideos
            }
        } 
    )});
	res.status(200).json(relatedVideoCollection);
}

module.exports = {
	getVideoInfo,
}