var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined'));

app.use(express.static('public'));

app.get('/api/occurrences/:word', function (req, res) {
  var occurences = {};
  var word = req.params.word;

  word.split('').forEach(character => {
    if (character in occurences) {
      occurences[character] += 1;
    } else {
      occurences[character] = 1;
    }
  });

  res.json(occurences);
});

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
