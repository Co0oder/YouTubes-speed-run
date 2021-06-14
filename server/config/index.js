require('dotenv').config({path: './../.env'});
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.YOUTUBE_TOKEN;

console.log(TOKEN)
module.exports = {
	PORT,
	TOKEN,
}