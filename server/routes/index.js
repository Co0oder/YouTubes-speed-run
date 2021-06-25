const router = require('express').Router();
const youtubeController = require('../controllers/youtube-controller');
const youtubeMockController = require('../controllers/youtube-mock.controller');

router.get('/', (req,res) => {
    res.status(200).send('YouTube Speed Run API')
});
router.post('/video', youtubeController.getVideoInfo);
router.post('/test', youtubeMockController.getVideoInfo);

module.exports = router;