const router = require('express').Router();
const youtubeController = require('../controllers/youtube-controller');

router.get('/', (req,res) => {res.status(200).send('YouTube Speed Run API')});
router.post('/video', youtubeController.getVideoInfo)

module.exports = router;