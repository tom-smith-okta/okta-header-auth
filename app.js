// Okta token tester

////////////////////////////////////////////////////

const express = require('express');

///////////////////////////////////////////////////

// SET UP WEB SERVER
const app = express();

app.use(express.static('public'));

require('./routes.js')(app);

var port = process.env.PORT || 5463

app.listen(port, function () {
	console.log('App listening on port ' + port);
});