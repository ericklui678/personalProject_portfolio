var express = require('express'),
  port = 8000,
  app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index');
})

app.listen(port, function(){
  console.log('running on', port);
})
