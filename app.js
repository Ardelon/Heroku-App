const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()
console.log(process.env);
app.use(express.static('public'));

app.get('', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});
console.log(process.env.PORT);
const server = app.listen(process.env.PORT || 5000, () => {
	var port = server.address().port;
	console.log('Listening...' + port);
});
