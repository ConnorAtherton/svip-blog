var connect = require('connect');
var express = require('express');
var app = express();
var port = process.env.PORT || 4343;

app.use(connect.static(__dirname + '/public'));
app.use(app.router);
app.use(connect.compress());

app.use(function(req, res) {
  res.redirect("/");
});

app.listen(port, function(){
  console.log('Hexo is running on port %d', port);
});