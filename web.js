var express = require('express');
var buff = fs.readFileSync(index.html);
var hello = buf.toString('utf8',0,buff);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
