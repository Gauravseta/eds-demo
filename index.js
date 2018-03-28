var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/dist')));

// viewed at based directory http://localhost:8080/
app.get('/*', function (req, res) {
  const index = path.join(__dirname, 'dist', 'index.html')
  res.sendFile(index);
});

app.listen(process.env.PORT || 8080);