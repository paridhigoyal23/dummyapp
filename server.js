var express = require('express');
var path = require('path');

var app = express();

app.get('/', (req, res) => {
   res.sendFile(path.resolve('dist/dummyapp/index.html'))
});

app.listen(80, () => {
  console.log('Server started!')
})
