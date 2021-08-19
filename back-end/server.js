const express = require('express');
const videos = require('./products');
const app = express();

app.get('/', (req, res) => {
	res.send('helooo');
});

app.get('/api/videos', (req, res) => {
	res.json(videos);
});
app.get('/api/videos/:id', (req, res) => {
	console.log(req);
	const video = videos.find((video) => video._id === req.params.id);
	res.json(video);
});
app.listen(5000, console.log('api is runing '));
