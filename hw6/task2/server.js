const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(3000);

app.use(function(req, res, next){
	res.sendFile(__dirname + '/public/index.html');
});
