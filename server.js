var express = require('express'),
  bodyParser = require('body-parser'),
  port = 8000,
  app = express();
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
})

app.listen(port, function(){
  console.log('running on', port);
})
