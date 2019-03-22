const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.render("index.html");
});

app.listen('2000', '127.0.0.1', function(){
  console.log('Server started on PORT 2000');
});