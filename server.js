const express = require('express');

const app = express();

app.use(express.static('/');

app.listen('2000', '127.0.0.1', function(){
  console.log('Server started on PORT 2000');
});